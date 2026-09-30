// Shared helpers for the players in p5js/play/*/.
// Load ../../sketches.js first, then this file, then the player's own script.

const P5T = (() => {
  // p5js/, worked out from this script's own URL so players can live at any depth.
  const BASE = new URL('../', document.currentScript.src).href;
  const SKETCHES = window.P5T_SKETCHES || [];

  // URL of a sketch folder, e.g. 'ArtSketch/05_11_2021/LangtonsAnt'.
  const sketchUrl = path =>
    BASE + path.split('/').map(encodeURIComponent).join('/') + '/';

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Settings: the defaults, overridden by the page's URL query, e.g.
  // ?cols=3&swap=8&labels=0. Each value is converted to its default's type.
  function params(defaults) {
    const q = new URLSearchParams(location.search);
    const out = { ...defaults };
    for (const [key, def] of Object.entries(defaults)) {
      if (!q.has(key)) continue;
      const v = q.get(key);
      if (typeof def === 'number') {
        const n = Number(v);
        if (Number.isFinite(n)) out[key] = n;
      } else if (typeof def === 'boolean') {
        out[key] = !['0', 'false', 'no', 'off'].includes(v.toLowerCase());
      } else {
        out[key] = v;
      }
    }
    return out;
  }

  // Draws sketches in random order without repeats until all have played;
  // skip(path) rejects sketches already on screen.
  function deck(items) {
    let cards = [];
    return function next(skip = () => false) {
      for (let tries = 0; tries < 2; tries++) {
        if (!cards.length) cards = shuffle(items.slice());
        const k = cards.findIndex(it => !skip(it.path));
        if (k >= 0) return cards.splice(k, 1)[0];
        cards = []; // only the skipped ones were left; reshuffle
      }
      return cards.pop();
    };
  }

  // Scale a fixed-size stage (w x h) to fit the window, centred.
  function fit(stage, w, h) {
    const place = () => {
      const s = Math.min(innerWidth / w, innerHeight / h);
      stage.style.transform = `scale(${s})`;
      stage.style.left = `${(innerWidth - w * s) / 2}px`;
      stage.style.top = `${(innerHeight - h * s) / 2}px`;
    };
    addEventListener('resize', place);
    place();
  }

  return {
    BASE,
    SKETCHES,
    PLAYABLE: SKETCHES.filter(it => it.done),
    P5_VERSION: window.P5T_P5_VERSION,
    sketchUrl,
    shuffle,
    params,
    deck,
    fit,
  };
})();
