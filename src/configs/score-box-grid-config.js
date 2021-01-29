import { CellAlign, CellScale } from '@armathai/pixi-grid';

function LP(l, p) {
  return window.innerWidth > window.innerHeight ? l : p;
}

export function scoreBoxGridConfig() {
  return LP(
    {
      // debug: {
      //   color: 0x000000,
      // },
      name: 'scoreBox',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          // debug: {
          //   color: 0xa6b0e8,
          // },
          name: 'scoreText',
          bounds: { x: 0.3, y: 0.05, width: 0.18, height: 0.08 },
          align: CellAlign.rightCenter,
        },
      ],
    },
    {
      // debug: {
      //   color: 0xff0000,
      // },
      name: 'scoreBox',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          // debug: {
          //   color: 0xa6b0e8,
          // },
          name: 'scoreText',
          bounds: { x: 0.3, y: 0.05, width: 0.18, height: 0.08 },
          align: CellAlign.center,
        },
      ],
    }
  );
}
