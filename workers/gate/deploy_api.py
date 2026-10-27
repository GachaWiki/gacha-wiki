# One-off: deploy workers/gate/worker.js via the REST API (wrangler CLI crashes on this machine today).
import io
import json
import re
import uuid
import urllib.request

ACCOUNT = "e51353d4a2f4d0a9f80a3145642da5a7"
TOKEN = re.search(r'^oauth_token = "(.*)"', open(
    r"C:/Users/Borin/AppData/Roaming/xdg.config/.wrangler/config/default.toml",
    encoding="utf-8").read(), re.M).group(1)
GW_SECRET = re.search(r'GW_SECRET=(\S+)', open(
    r"C:/Users/Borin/.zcode/gw-gate-credentials.txt").read()).group(1)
BOT_TOKEN = re.search(r'^DISCORD_TOKEN=(.+)$', open(
    r"C:/Users/Borin/ZCodeProject/gacha-wiki-bot/.dev.vars", encoding="utf-8").read(), re.M).group(1).strip()

source = io.open(r"C:/Users/Borin/ZCodeProject/gacha-wiki/workers/gate/worker.js", encoding="utf-8").read()

metadata = {
    "main_module": "worker.js",
    "compatibility_date": "2026-10-01",
    "bindings": [
        {"type": "kv_namespace", "name": "MEMBERS", "namespace_id": "6614fbfb7de34e97bf0603d3acc347ba"},
        {"type": "secret_text", "name": "GW_SECRET", "text": GW_SECRET},
        {"type": "secret_text", "name": "DISCORD_BOT_TOKEN", "text": BOT_TOKEN},
    ],
}

boundary = "----gw" + uuid.uuid4().hex
parts = []
parts.append(
    "--" + boundary + "\r\n"
    'Content-Disposition: form-data; name="metadata"\r\n'
    "Content-Type: application/json\r\n\r\n" + json.dumps(metadata) + "\r\n")
parts.append(
    "--" + boundary + "\r\n"
    'Content-Disposition: form-data; name="worker.js"; filename="worker.js"\r\n'
    "Content-Type: application/javascript+module\r\n\r\n" + source + "\r\n")
parts.append("--" + boundary + "--\r\n")
body = "".join(parts).encode("utf-8")

req = urllib.request.Request(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT}/workers/scripts/gachawiki-gate",
    data=body, method="PUT",
    headers={"Authorization": "Bearer " + TOKEN, "Content-Type": "multipart/form-data; boundary=" + boundary})
try:
    resp = json.load(urllib.request.urlopen(req, timeout=60))
except urllib.error.HTTPError as e:
    resp = json.load(e)
print("deploy success:", resp.get("success"))
if not resp.get("success"):
    print(json.dumps(resp.get("errors"), indent=1)[:800])
