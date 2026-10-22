# Parse MAJO gallery mobile post pages into the majo_parsed2.txt format.
# Header: ===== POST <no> | <page title> | YYYY-MM-DD =====
# BODY from div.thum-txtin (<p> joined, tags stripped), CMTn from ul.all-comment-lst li.comment.
import re, html as H, glob, os, sys

# data lives next to this script (works from ~ or research/majo-dc-inside/)
HOME = os.path.dirname(os.path.abspath(__file__))

def clean(s):
    s = re.sub(r'<br\s*/?>', '', s)
    s = re.sub(r'<[^>]+>', '', s)
    s = H.unescape(s)
    return re.sub(r'\s+', ' ', s).strip()

def parse_post(path):
    no = int(os.path.splitext(os.path.basename(path))[0])
    doc = open(path, encoding='utf-8').read()
    title = re.search(r'<title>(.*?)</title>', doc, re.S).group(1).strip()
    m = re.search(r'<li>(20\d\d\.\d\d\.\d\d) \d\d:\d\d</li>', doc)
    date = m.group(1).replace('.', '-') if m else '?'
    mb = re.search(r'<div class="thum-txtin">(.*?)</div>\s*</div>', doc, re.S)
    body = ''
    if mb:
        ps = re.findall(r'<p[^>]*>(.*?)</p>', mb.group(1), re.S)
        body = ''.join(clean(p) for p in ps)
    cmts = []
    mc = re.search(r'<ul class="all-comment-lst"[^>]*>(.*)', doc, re.S)
    if mc:
        # comments region runs until the comment form; li.comment blocks are ordered
        for li in re.findall(r'<li class="comment[^"]*"[^>]*>(.*?)</li>', mc.group(1), re.S):
            if 'delted' in li:
                cmts.append('')
                continue
            t = re.search(r'<p class="txt">(.*?)</p>', li, re.S)
            cmts.append(clean(t.group(1)) if t else '')
    lines = [f'===== POST {no} | {title} | {date} =====', f'BODY: {body}']
    lines += [f'  CMT{i+1}: {c}' for i, c in enumerate(cmts)]
    return no, '\n'.join(lines) + '\n'

if __name__ == '__main__':
    if sys.argv[1] == 'test':
        no, block = parse_post(os.path.join(HOME, 'majo_posts', sys.argv[2] + '.html'))
        print(block)
    else:
        # merge: old parsed files verbatim + new posts (no > 272), sorted by post no
        blocks = {}
        for f in ['majo_parsed.txt', 'majo_parsed2.txt']:
            txt = open(os.path.join(HOME, f), encoding='utf-8').read()
            for blk in re.split(r'\n(?====== POST )', txt):
                m = re.search(r'^===== POST (\d+) \|', blk)
                if m:
                    blocks[int(m.group(1))] = blk.strip()
        news = sorted(glob.glob(os.path.join(HOME, 'majo_posts', '*.html')))
        for p in news:
            no, blk = parse_post(p)
            if no > 272:
                blocks[no] = blk
        out = '\n\n'.join(blocks[k] for k in sorted(blocks)) + '\n'
        with open(os.path.join(HOME, 'majo_parsed3.txt'), 'w', encoding='utf-8') as fh:
            fh.write(out)
        print(f'total blocks: {len(blocks)}; new posts added: {sum(1 for k in blocks if k > 272)}')
