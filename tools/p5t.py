#!/usr/bin/env python3
"""Helpers for porting the #p5t Processing sketches to p5.js.

  python3 tools/p5t.py gallery                        # rebuild p5js/sketches.js and play/players.js
  python3 tools/p5t.py html                           # rewrite every sketch's index.html and style.css
  python3 tools/p5t.py new-player NAME [--from wall]   # copy a player to p5js/play/NAME/

The players in p5js/play/*/ are plain hand-edited files that read the sketch
list from p5js/sketches.js; p5js/index.html is the launcher.

Other scripts import write_sketch() to lay out a converted sketch as
p5js/<same path as in #p5t>/{index.html, style.css, sketch.js}; each folder
is a complete p5.js web editor project (p5t.js loads from GitHub Pages).
"""

import html
import json
import re
import shutil
import sys
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "#p5t"
OUT = ROOT / "p5js"
PLAY = OUT / "play"
P5_VERSION = "2.3.4"
P5_URL = f"https://cdn.jsdelivr.net/npm/p5@{P5_VERSION}/lib/p5.min.js"
# p5js/lib/p5t.js as GitHub Pages serves it, so sketches also run in the web editor.
LIB_URL = "https://jht9629-nyu.github.io/-p5t-p5js/lib/p5t.js"
UPSTREAM = "https://github.com/madparker/-p5t/blob/main/"

# Sketches calling these load p5t.js from LIB_URL (Processing-style pixels and colors).
LIB_USE = re.compile(
    r"\b(j(get|set|loadPixels|color|colorInt|red|green|blue|hue|saturation|brightness"
    r"|lerpColor|fill|stroke|background|int|createCanvas|sync|colorMode)|idiv)\("
)

# Scratch copies left next to the real sketch; not ported.
SKIP_FILES = {"BAK.pde", "Temop.pde"}

# Sketches calling jset get <!-- noprotect --> so the p5 web editor's loop
# protection does not stop their long pixel loops (it ignores // noprotect in sketch.js).
NOPROTECT_USE = re.compile(r"\bjset\b")

# Laid out like the p5.js web editor's default index.html (tools/p5js-v2-index.html).
INDEX_HTML = """{noprotect}<!doctype html>
<html lang="en">
  <head>
    <script src="{p5_url}"></script>
{libs}    <link rel="stylesheet" type="text/css" href="style.css" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
  </head>
  <body>
    <main></main>
    <script src="sketch.js"></script>
  </body>
</html>
"""

STYLE_CSS = """html,
body {
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #d0d0d0;
}
canvas {
  display: block;
}
"""

ORIGINAL_MARK = "\n// ---- Original Processing source: "


def sketch_dirs():
    """Folders under #p5t (relative, posix) that hold a sketch."""
    dirs = {p.parent.relative_to(SRC).as_posix() for p in SRC.rglob("*.pde")}
    return sorted(dirs)


def main_pde(rel):
    d = SRC / rel
    named = d / f"{d.name}.pde"
    if named.exists():
        return named
    return sorted(p for p in d.glob("*.pde") if p.name not in SKIP_FILES)[0]


def upstream_url(pde):
    return UPSTREAM + quote(pde.relative_to(ROOT).as_posix())


def write_sketch(rel, body):
    """Write p5js/<rel>/sketch.js (header + body + original), index.html and style.css."""
    pde = main_pde(rel)
    src_rel = pde.relative_to(ROOT).as_posix()
    original = pde.read_text().rstrip()
    name = Path(rel).name
    header = (
        f"// {name} (p5.js {P5_VERSION} port of a #p5t Processing sketch)\n"
        f"// {upstream_url(pde)}\n"
        f"// {src_rel}\n"
    )
    if "*/" in original:
        # The source has its own block comment, so comment it line by line.
        quoted = "\n".join(("// " + line).rstrip() for line in original.split("\n"))
    else:
        quoted = f"/*\n{original}\n*/"
    footer = f"\n// ---- Original Processing source: {src_rel}\n{quoted}\n"
    out = OUT / rel
    out.mkdir(parents=True, exist_ok=True)
    (out / "sketch.js").write_text(header + "\n" + body.strip() + "\n" + footer)
    write_html(rel, body)


def write_html(rel, code):
    """Write p5js/<rel>/index.html and style.css; code is the sketch's own JS."""
    out = OUT / rel
    libs = f'    <script src="{LIB_URL}"></script>\n' if LIB_USE.search(code) else ""
    noprotect = "<!-- noprotect -->\n" if NOPROTECT_USE.search(code) else ""
    (out / "index.html").write_text(
        INDEX_HTML.format(title=html.escape(Path(rel).name), p5_url=P5_URL, libs=libs, noprotect=noprotect)
    )
    (out / "style.css").write_text(STYLE_CSS)


def build_html():
    """Rewrite index.html and style.css for every converted sketch."""
    n = 0
    for rel in sketch_dirs():
        js = OUT / rel / "sketch.js"
        if js.exists():
            write_html(rel, js.read_text().split(ORIGINAL_MARK)[0])
            n += 1
    print(f"html: {n} sketches")


def build_gallery():
    """Write p5js/sketches.js (the sketch list) and p5js/play/players.js."""
    items = []
    for rel in sketch_dirs():
        items.append(
            {
                "path": rel,
                "name": Path(rel).name,
                "group": str(Path(rel).parent),
                "done": (OUT / rel / "sketch.js").exists(),
                "src": upstream_url(main_pde(rel)),
            }
        )
    done = sum(i["done"] for i in items)
    rows = ",\n".join("  " + json.dumps(i) for i in items)
    (OUT / "sketches.js").write_text(
        "// Generated by tools/p5t.py gallery; do not edit by hand.\n"
        f"window.P5T_P5_VERSION = {json.dumps(P5_VERSION)};\n"
        f"window.P5T_SKETCHES = [\n{rows}\n];\n"
    )
    build_players()
    print(f"gallery: {done}/{len(items)} sketches converted")


def build_players():
    """List the players in p5js/play/*/ for the launcher."""
    players = []
    for page in sorted(PLAY.glob("*/index.html")):
        text = page.read_text()
        title = re.search(r"<title>(.*?)</title>", text, re.S)
        desc = re.search(r'<meta name="description" content="(.*?)"', text, re.S)
        players.append(
            {
                "name": page.parent.name,
                "title": html.unescape(title.group(1).strip()) if title else "",
                "description": html.unescape(desc.group(1).strip()) if desc else "",
            }
        )
    (PLAY / "players.js").write_text(
        "// Generated by tools/p5t.py gallery; do not edit by hand.\n"
        f"window.P5T_PLAYERS = {json.dumps(players, indent=1)};\n"
    )
    print(f"players: {', '.join(p['name'] for p in players)}")


def new_player(name, base):
    """Copy p5js/play/<base>/ to p5js/play/<name>/ and retitle it."""
    src, dst = PLAY / base, PLAY / name
    if not re.fullmatch(r"[A-Za-z0-9_-]+", name):
        sys.exit(f"player name must be letters, digits, - or _: {name!r}")
    if not (src / "index.html").exists():
        sys.exit(f"no player {base!r} in {PLAY.relative_to(ROOT)}")
    if dst.exists():
        sys.exit(f"{dst.relative_to(ROOT)} already exists")
    shutil.copytree(src, dst)
    page = dst / "index.html"
    page.write_text(
        re.sub(r"<title>.*?</title>", f"<title>{html.escape(name)}</title>",
               page.read_text(), count=1, flags=re.S)
    )
    print(f"created {dst.relative_to(ROOT)}/ from {base}")
    build_players()


if __name__ == "__main__":
    args = sys.argv[1:]
    if args == ["gallery"]:
        build_gallery()
    elif args == ["html"]:
        build_html()
    elif len(args) == 2 and args[0] == "new-player":
        new_player(args[1], "wall")
    elif len(args) == 4 and args[0] == "new-player" and args[2] == "--from":
        new_player(args[1], args[3])
    else:
        sys.exit(__doc__)
