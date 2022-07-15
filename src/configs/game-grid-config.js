import { CellAlign } from '@armathai/pixi-grid';

function LP(l, p) {
  return window.innerWidth > window.innerHeight ? l : p;
}

export function gameGridConfig() {
  return LP(
    {
      name: 'game',
      cells: [
        {
          name: 'board',
          bounds: { x: 0.3, y: 0.3, width: 0.4, height: 0.55 },
          align: CellAlign.centerTop,
        },
        {
          name: 'scoreBox',
          bounds: { x: 0.3, y: 0.15, width: 0.18, height: 0.08 },
        },
        {
          // debug: { color: 0x00ff00 },
          name: 'gameOver',
          bounds: { x: 0.3, y: 0.3, width: 0.4, height: 0.55 },
        },
        {
          name: 'nextBalls',
          bounds: { x: 0.52, y: 0.15, width: 0.18, height: 0.08 },
          align: CellAlign.leftCenter,
        },
      ],
    },

    {
      // debug: { color: 0xff0000 },
      name: 'game',
      cells: [
        {
          name: 'board',
          bounds: { x: 0, y: 0.2, width: 1, height: 0.55 },
          align: CellAlign.centerTop,
          padding: { x: 0.1, width: 0.8 },
        },
        {
          name: 'scoreBox',
          bounds: { x: 0.1, y: 0.05, width: 0.45, height: 0.08 },
          align: CellAlign.leftCenter,
        },
        {
          // debug: { color: 0xff0000 },
          name: 'gameOver',
          bounds: { x: 0.1, y: 0.2, width: 0.8, height: 0.55 },
          // align: CellAlign.centerTop,
        },
        {
          name: 'nextBalls',
          bounds: { x: 0.55, y: 0.05, width: 0.35, height: 0.08 },
        },
      ],
    }
  );
}
