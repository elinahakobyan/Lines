import { CellAlign, CellScale } from '@armathai/pixi-grid';

function LP(l, p) {
  return window.innerWidth > window.innerHeight ? l : p;
}

export function gameOverGridConfig() {
  return LP(
    {
      // debug: {
      //   color: 0x000000,
      // },
      name: 'main',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          // debug: {
          //   color: 0xa6b0e8,
          // },
          name: 'bg',
          bounds: { x: 0, y: 0, width: 1, height: 1 },
          align: CellAlign.center,
        },
        {
          // debug: {
          //   color: 0x92f6ff,
          // },
          name: 'text',
          bounds: { x: 0.15, y: 0.25, width: 0.7, height: 0.15 },
          align: CellAlign.center,
        },
        {
          // debug: {
          //   color: 0x3c3665,
          // },
          name: 'retry',
          bounds: { x: 0.15, y: 0.6, width: 0.7, height: 0.15 },
          align: CellAlign.center,
        },
        {
          // debug: {
          //   color: 0x003448,
          // },
          name: 'score',
          bounds: { x: 0.15, y: 0.43, width: 0.7, height: 0.15 },
          align: CellAlign.center,
        },
      ],
    },
    {
      // debug: {
      //   color: 0xff0000,
      // },
      name: 'main',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          // debug: {
          //   color: 0xa6b0e8,
          // },
          name: 'bg',
          bounds: { x: 0, y: 0, width: 1, height: 1 },
          align: CellAlign.center,
        },
        {
          // debug: {
          //   color: 0x92f6ff,
          // },
          name: 'text',
          bounds: { x: 0.15, y: 0.25, width: 0.7, height: 0.15 },
          align: CellAlign.center,
        },
        {
          // debug: {
          //   color: 0x3c3665,
          // },
          name: 'retry',
          bounds: { x: 0.15, y: 0.6, width: 0.7, height: 0.15 },
          align: CellAlign.center,
        },
        {
          // debug: {
          //   color: 0x003448,
          // },
          name: 'score',
          bounds: { x: 0.15, y: 0.43, width: 0.7, height: 0.15 },
          align: CellAlign.center,
        },
      ],
    }
  );
}
