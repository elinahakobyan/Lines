function LP(l, p) {
  return window.innerWidth > window.innerHeight ? l : p;
}

export function mainGridConfig() {
  return LP(
    {
      // debug: { color: 0xff0000 },
      name: 'main',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
    },

    {
      // debug: { color: 0xff0000 },
      name: 'main',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
    }
  );
}
