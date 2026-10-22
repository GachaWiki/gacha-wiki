# MAJO DC Inside Gallery Research

KR community research archive for the MAJO: Witches Night section (tier list + community meta sources). Scraped from the DC Inside MAJO 아포칼립스 택틱스 RPG 마이너 갤러리 (`gall.dcinside.com/mgallery/board/lists/?id=majo`): every post from #6 (2026-08-12, gallery start) through #321 (2026-10-20), including comments.

## Contents

| Path | What it is |
|---|---|
| `majo_posts/` | Raw mobile post pages (`https://m.dcinside.com/board/majo/<no>`), one HTML file per post. Missing numbers (e.g. 285, 286, 304, 314) were deleted from the gallery before scraping. |
| `majo_parsed3.txt` | Consolidated text dataset, all 157 posts in `===== POST <no> | <title> | <date> =====` blocks with `BODY:` and `CMTn:` lines. Posts > 272 include all comments (older parse runs truncated comments). |
| `majo_parsed.txt`, `majo_parsed2.txt` | Earlier partial parses (posts 73-272 and 6-252); kept verbatim, superseded by `majo_parsed3.txt`. |
| `majo_list_*.html` | Saved gallery list pages from the 2026-09-15 scrape session. |
| `majo_list_p78.txt` | Parsed list page 78 (oldest posts) with titles, authors, dates, view/recommend counts. |
| `majo_update.py` | Update script: scrapes new posts and rebuilds the merged file. Run `python majo_update.py merge` from this folder. |

Scrape dates: 2026-09-15 (posts 6-272) and 2026-10-22 (posts 273-321).
