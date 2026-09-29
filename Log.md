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

| Issue                                | Sketches | Why it matters                                                                                                                                                                                                                                   |
| ------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `colorMode` (mostly `HSB,99`)        | 64       | Works the same in p5; low risk                                                                                                                                                                                                                   |
| `set()`/`get()`                      | ~50      | Processing lets you pass a packed int color like `-1` or `c--`. p5 doesn't accept those, so each one needs an ARGB-to-`color()` helper                                                                                                           |
| `P3D`                                | 34       | This is the big one. p5's `WEBGL` puts the origin at the center, so every `translate(250,250)` would draw off-center. Adding `translate(-width/2,-height/2)` at the top of `draw()` fixes that. Stroke and blending also look different in WebGL |
| `color()` / `#RRGGBB` literals       | 34 / 11  | Hex literals become strings. Code that does arithmetic on colors breaks                                                                                                                                                                          |
| Typed arrays (`int[]`, `new int[n]`) | 33       | Become `new Array(n).fill(0)`, or `Int32Array` where the code relies on wraparound                                                                                                                                                               |
| Integer math (`int`, casts)          | 25+      | **The quietest risk.** In Java, `i/5` truncates when both values are ints; in JS it doesn't. Tweet-sized code depends on this all the time (for example `p++/3`), so each one needs a `floor()` or `\|0`                                         |
| `pixels[]`                           | 8        | p5 stores four bytes per pixel (RGBA), so every index is multiplied by 4. It also needs `pixelDensity(1)`, as LangtonsAnt already uses                                                                                                           |
| `class` / `PVector`                  | 17 / 5   | Direct translation, low risk                                                                                                                                                                                                                     |
| `text()`                             | 24       | Mostly fine, but default fonts differ                                                                                                                                                                                                            |
| Java-only calls                      | a few    | `frame.setSize` (drop it and use `createCanvas`), `3f` float suffixes, `char` math in `CharTrain`                                                                                                                                                |

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

_Time cost: about 5 minutes (repo survey and plan)._

## 2026-09-29 ~18:07–18:32 EDT: Batch 1, simple 2D sketches

_Time cost: about 25 minutes (estimated from file timestamps)._

### Prompt

> pin p5 version to 1.11.12
> create gallery page
> do batch 1

### Response

I set every sketch to p5.js 1.11.12, built the gallery page, and converted Batch 1: 39 sketches, so 40 of 159 are now in `p5js/`, counting LangtonsAnt. All 40 load in headless Chrome with no JavaScript errors and draw something plausible. Whether each one matches the original's look and motion is still for you to judge. Nothing is committed yet.

**Where things are**

- **Pinned version:** every `index.html` loads p5.js 1.11.12, and LangtonsAnt's was updated from 1.9.0.
- **Gallery:** `p5js/index.html` lists all 159 sketches grouped by date, with unconverted ones marked "todo". Clicking a converted sketch plays it next to the list, with links to its `sketch.js` and the original `.pde`.
- **Tool:** `tools/p5t.py` writes each sketch's `index.html` and wraps `sketch.js` with a header linking the original and the full original source in a comment at the bottom. After each batch, run `python3 tools/p5t.py gallery` to refresh the gallery.
- **Viewing:** run `python3 -m http.server` in `p5js/` and open `localhost:8000`. CovidCases fetches its data over the network, so it needs to be served rather than opened as a file.

**What's in Batch 1:** every sketch without `P3D`, `set()`/`get()`, `pixels[]` or font/image loading, and not one of the odd ones (MazeMaker, CharTrain, Samples, Rose).

**Differences between Processing and p5 that I fixed in every sketch where they apply**

- **Background:** p5 starts with a transparent canvas, so sketches that never set one get Processing's default gray (`background(204)`). `clear()` becomes `background(0)`, because p5's `clear()` shows the page through the canvas.
- **Text colour:** p5 draws text in black until `fill()` is called, while Processing uses white. Without the fix, DontPanic, CovidCases, Game, Whack and ClockGame showed nothing.
- **Text outline:** p5 outlines text with the current stroke and Processing never does, so NightPond and ClockGame turn the stroke off around their `text()` calls.
- **Integer division:** Java drops the remainder when dividing whole numbers and JavaScript doesn't, so those divisions now use `floor()`. This affected Pattern, Whack, Mandala, Cloud, Peek and ColorVolcano.
- **Speed:** browsers cap drawing at about 60 frames per second. For sketches set higher (Game at 500, Warp at 999, sketch_200701a at 1250, Towers, ColorCity, Abstract), `draw()` runs several steps per frame to keep the original speed.

**Changes to specific sketches**

- **sketch_200718a would freeze forever.** Its angle falls into a cycle that never finds a point on the canvas. The port stalls after about 49 frames, and with Java's number precision the original freezes the same way after about 73 seconds. I added a guard that picks a new random angle after 1000 failed tries.
- **HSBNoise** looped to 99 in both directions, but anything past 25 is off the 500px canvas. It now stops at 25, which draws the same image much faster.
- **Warp** only draws its lines once per frame, since each step repaints the whole canvas and only the last one would be visible.

**Worth checking by eye:** Mandala, RainbowFlag, SpiralWorm and ColorSwirl in a normal browser (they ran slowly in headless Chrome without a GPU), and the interactive ones: Game ('a'/'d' keys), Whack (mouse) and ClockGame (any key).

## 2026-09-29 ~18:32–19:10 EDT: Batch 2, P3D sketches

_Time cost: about 40 minutes (estimated from file timestamps; about 10 of those went to profiling the slow sketches)._

### Prompt

> do batch 2

### Response

Batch 2 is done: all 34 `P3D` sketches are ported to p5 WEBGL, and the gallery now shows 74 of 159 converted. Every one loads with no JavaScript errors, and the screenshots look right. Eleven of them run slowly (listed below). Nothing is committed yet, including Batch 1.

This batch includes `#p5t/Rose` and `#p5t/Samples/Move3DShape`. I'd planned them for Batch 4, but they turned out to be plain `P3D` sketches.

**Changes made in every WEBGL port**

- **Origin:** p5 puts the origin at the canvas center, so each `draw()` starts with `translate(-width/2, -height/2)`. The default camera then matches Processing's.
- **Antialiasing and strokes:** Processing smooths 3D shapes and keeps 3D lines a constant width. p5 does neither by default in Chrome, so each sketch turns antialiasing on and calls `linePerspective(false)`.
- **Constants:** `beginShape(10)` is `TRIANGLE_STRIP`, `beginShape(18)` is `QUAD_STRIP`, and `colorMode(3)` is `HSB`.
- **Sphere detail:** p5 has no `sphereDetail()`, so the detail is passed to `sphere()` directly, keeping Processing's minimum of 3 × 2 (RoseGarden and ColorRotate stay faceted).
- **Point lights:** p5 ignores the current transform when placing a `pointLight`, so Knit and Cave pass Processing's screen coordinates shifted to p5's.

**Changes to specific sketches**

- **DominoTwist:** in Processing each row's light stays on for the rest of the frame. p5 turns lights off at `pop()` and allows at most 5, so the lights are now added before `push()` and stop at 5. The last three rows get slightly less light than in the original.
- **ColorSpace:** p5 WEBGL can't draw text without a loaded font file. It now loads DejaVu Sans from jsDelivr, so it needs a network connection, like CovidCases.
- **ColorRotate and distress:** Java int colours (`-1` for white, `-65536` for red) became explicit colours.
- **OrthoFlower and OpenAir:** their `ortho()` calls pass Processing's larger depth range, because p5's default cuts off distant shapes.

**Slow sketches (frame rates measured with the GPU on this Mac)**

| Sketch                                        | fps   | Why                                                                                            |
| --------------------------------------------- | ----- | ---------------------------------------------------------------------------------------------- |
| SpaceValley                                   | 1.4   | about 62,000 stroked vertices per frame                                                        |
| Landscape                                     | 1.6   | about 20,000 boxes per frame                                                                   |
| WireWorld, BoltTunnel                         | 3–4   | stroked strips; BoltTunnel also has 720 filled rings to triangulate                            |
| ColorSpiral, DownTheSpiral, DominoTwist, Cave | 6–9   | stroked strips (ColorSpiral, DownTheSpiral), thousands of boxes or spheres (DominoTwist, Cave) |
| DepthRot, distress, StainedGlassTunnel        | 14–20 | many boxes (DepthRot), stroked strips (distress, StainedGlassTunnel)                           |

Profiling showed two causes. For stroked strips, p5 1.x rebuilds stroke geometry for every shape on every frame: without strokes, SpaceValley goes from 1.4 to 32 fps and WireWorld from 4 to 60, while square caps and miter joins didn't help. For box-heavy sketches, the cost is the overhead of each box draw call; skipping unneeded `push()`/`pop()` in Landscape made no measurable difference, so I reverted it. Making these faster would change how they look, so they're left faithful. A coarser version could be added alongside each original if wanted.

Batch 3 is next: the roughly 50 `set()`/`get()`/`pixels[]` sketches, which need a helper to turn Java int colours into p5 colours.

## 2026-09-29 19:14 EDT: Log update

_Time cost: about 2 minutes._

### Prompt

> append this chat to Log.md with date and time stamp
> with approximate time cost

These 80 sketches depend on Processing's int-based pixel model with direct get()/set() access across all 230,000 pixels per frame, which p5's slower, non-int color API can't match. I'll build a shared helper, p5js/lib/p5t.js, to maintain an int-ARGB pixel buffer in sync with the canvas—starting by identifying which p5 2D drawing methods need hooking.

## 2026-09-29 ~19:15–19:40 EDT: Batch 3, pixel and int-colour sketches

_Time cost: about 25 minutes (estimated from file timestamps; about 5 of those went to profiling and the CaveExplorers speed-up)._

### Prompt

> do batch 3

### Response

Batch 3 is done: all 80 sketches are ported, and the gallery now shows 154 of 159 converted. All 80 load with no JavaScript errors, and the screenshots look right.

**New shared helper library: `p5js/lib/p5t.js`**
- **Why:** these sketches use Java int colours (`-1` for white, `#000000`, and even arithmetic on packed colours) and read or write every pixel with `get()`/`set()`/`pixels[]`. p5's versions don't use int colours and are far too slow for that.
- **What it provides:** `jget`/`jset`/`jloadPixels`, `jcolor`/`jcolorInt`, the `jred`/`jhue`/`jbrightness` family, `jlerpColor`, `jfill`/`jstroke`/`jbackground`, `idiv` for Java integer division, and `jint` for Java's `(int)` cast. They follow Processing's rules, including which arguments count as a gray level and which as a packed colour.
- **Keeping pixels and shapes in sync:** it works on an integer copy of the canvas, so sketches can mix pixel access with `circle()` or `text()` freely.
- **Where it's used:** 44 of the 80 sketches use it. `tools/p5t.py` adds it to a sketch's `index.html` automatically when the code calls it.

**How Java behaviour is preserved in the ports**
- **Snapshot versus live pixels:** `loadPixels()` takes a snapshot and `get()` reads live pixels, as in Processing. The Game-of-Life-style sketches (life, CircleOfLife, BlueCircle) depend on the snapshot.
- **Casts and division:** `(int)random(4)-2` and `int(random(4)-2)` give different ranges in Java, and each port keeps the one its original used. Java int division is kept, including MazeAdventure's `/96` that produces its blocky maze.
- **Overflow:** Java int overflow is kept in the water ripples (WaterOne, WaterWater, WaterFinal, NotGreat), Mandlebrot and CaveExplorers.
- **Window size:** the 40 or so sketches that sized their window with `frame.setSize()` in `draw()` now call `createCanvas()` in `setup()`.

**Behaviour that's faithful but may look like a bug**
- **MazeDraft** never wraps its x position, so after the first step every `set()` lands off the canvas and is ignored, just as in Processing.
- **SunDown** turns the whole canvas one colour every few seconds. The "sun" radius jumps past the largest distance on the canvas, so that's correct.
- **Colours with alpha set directly on pixels** (Mandlebrot, LavaFlow, ColorMoves) are shown at full opacity. That matches Processing's opaque window, though there was no real Processing render to compare against.

**Small deviations:** ClipSpiral uses a canvas clip rectangle, because p5 1.x has no rectangle `clip()`. RingOfNonFire no longer logs to the console every frame. Flocking's `d` field is renamed, because JS can't share a name between a field and a method.

**Slow sketches (frame rates measured with the GPU on this Mac)**
- **ParticleTrail2: 1.7 fps.** It draws 62,500 `text()` characters per frame.
- **About 12 noise-per-pixel sketches: 8–18 fps.** These include LavaFlow, ColorNoise, MapGen, DessertIsland, Nova and Beach. Profiling shows 70–75% of the time is p5's `noise()`, and the helpers take about 5%.
- **CaveExplorers: 11.7 fps.** It started at 1 fps because every particle's `text()` forced a full canvas reload; the library now reads single pixels in that case.

Batch 4 is the last 5 sketches: MazeMaker, MazeMaker2 and MazeMaker3 (the two MazeMakers with extra `.pde` files), CharTrain (`char` math and a font), and `Samples/PixelBased`.

## 2026-09-29 19:41 EDT: Commit Batch 3 and log update

_Time cost: about 3 minutes._

### Prompt

> commit Batch 3 first and add batch 3 chat to Log.md

### Response

Batch 3 was already committed (as `v1.1.1`, with the library fix in the next commit). The only uncommitted change was the rebuilt gallery page, now committed as `caad649` ("Batch 3: rebuild gallery (154/159 converted)"). This entry was then added to Log.md.
