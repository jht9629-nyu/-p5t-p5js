# Log

## 2026-09-29 18:06 EDT — Conversion plan: `#p5t` Processing → `p5js`

### Prompt

> plan out conversion from processing files in folder #p5t
> to p5js files stored p5js
> following the same folder path
> any recommendations before we start

### Response

#### What's there

- **161 `.pde` files in 159 sketch folders**: 158 under `#p5t/ArtSketch/<date>/<Name>/`, one in `#p5t/Rose/`, and two under `#p5t/Samples/`.
- **All of them are small.** Most are single-file tweetable sketches of about 330 bytes (53 KB total). The largest is `MazeMaker.pde` at 1.1 KB.
- **Two folders have an extra `.pde`**: `MazeMaker2/BAK.pde` and `MazeMaker3/Temop.pde`. They look like scratch or backup copies.
- **Media**: 7 `.gif` and 2 `.mp4` files, mostly in `09_13_2020` and `09_14_2020`. There are also 5 `.DS_Store` files, which should be ignored.
- **One sketch is already done**: `p5js/ArtSketch/05_11_2021/LangtonsAnt/`, which sets the pattern of an `index.html` plus a `sketch.js` with provenance comments.

#### Where the conversion is risky (sketch counts)

| Issue | Sketches | Why it matters |
|---|---|---|
| `colorMode` (mostly `HSB,99`) | 64 | Works the same in p5; low risk |
| `set()`/`get()` | ~50 | Processing lets you pass a packed int color like `-1` or `c--`. p5 doesn't accept those, so each one needs an ARGB-to-`color()` helper |
| `P3D` | 34 | This is the big one. p5's `WEBGL` puts the origin at the center, so every `translate(250,250)` would draw off-center. Adding `translate(-width/2,-height/2)` at the top of `draw()` fixes that. Stroke and blending also look different in WebGL |
| `color()` / `#RRGGBB` literals | 34 / 11 | Hex literals become strings. Code that does arithmetic on colors breaks |
| Typed arrays (`int[]`, `new int[n]`) | 33 | Become `new Array(n).fill(0)`, or `Int32Array` where the code relies on wraparound |
| Integer math (`int`, casts) | 25+ | **The quietest risk.** In Java, `i/5` truncates when both values are ints; in JS it doesn't. Tweet-sized code depends on this all the time (for example `p++/3`), so each one needs a `floor()` or `\|0` |
| `pixels[]` | 8 | p5 stores four bytes per pixel (RGBA), so every index is multiplied by 4. It also needs `pixelDensity(1)`, as LangtonsAnt already uses |
| `class` / `PVector` | 17 / 5 | Direct translation, low risk |
| `text()` | 24 | Mostly fine, but default fonts differ |
| Java-only calls | a few | `frame.setSize` (drop it and use `createCanvas`), `3f` float suffixes, `char` math in `CharTrain` |

#### Recommendations to decide before starting

1. **Pin the p5 version.** Your LangtonsAnt notes say it fails in p5.js 2.3.3 but works in 1.11.12, yet its `index.html` loads 1.9.0. I'd standardize on **1.11.x** for every sketch, because 2.x changed pixels, fonts and async loading. That means updating LangtonsAnt's `index.html` too.
2. **Use a shared template.** Make one `index.html` template that loads only `sketch.js`. Each `sketch.js` keeps the LangtonsAnt header: the original tweet, the upstream GitHub URL and the source path.
3. **Aim for faithful, readable code, not tweet-golfed code.** Keep the original one-liner in a comment and write expanded code that runs. That way the Java-to-JS semantic fixes can be checked.
4. **Add a generated `p5js/index.html` gallery** that links every sketch. It makes checking 159 sketches much faster. If you want it, it could show the `.gif`s next to the p5 output.
5. **Decide on the leftovers.** I suggest leaving `BAK.pde` and `Temop.pde` out, or converting them as `BAK.js` without wiring them into the page. I'd also leave the `.gif`/`.mp4` files out of `p5js/` rather than copying them.
6. **Work in batches.** Do one date range at a time (for example all of July 2020, about 30 sketches) and commit after each batch. Suggested order:
   - **Batch 1:** the simple 2D sketches.
   - **Batch 2:** the `P3D` ones.
   - **Batch 3:** the `set()`/`pixels[]` ones.
   - **Batch 4:** the multi-file and oddball ones (MazeMaker2 and 3, CharTrain, Samples, Rose).
7. **Check each batch by running it.** I can serve `p5js/` locally and open each sketch to look for console errors and blank canvases. Whether the output looks right against the original is something you'd need to judge, since there's no Processing reference render to compare with.
8. **Folder names stay as they are.** That keeps the odd ones: `05_17_21`, the nested `07_22_2020/07_24_2020/Spiral`, and the `#` in `#p5t`. Only the `#p5t/` prefix changes to `p5js/`. That prefix is also why the target isn't named `#p5t`: `#` breaks URLs.
9. **LangtonsAnt has an uncommitted change** (3 lines deleted in `sketch.js`). Commit or discard it before starting so the batch commits stay clean.

To start, tell me the p5 version (I recommend 1.11.x) and whether you want the gallery page. I'll then do Batch 1 and pause for you to review it.
