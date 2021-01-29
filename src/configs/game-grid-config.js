import { CellAlign, CellScale } from '@armathai/pixi-grid';

function LP(l, p) {
  return window.innerWidth > window.innerHeight ? l : p;
}

export function gameGridConfig() {
  return LP(
    {
      // debug: {
      //   color: 0x00ff00,
      // },
      name: 'game',
      cells: [
        {
          // debug: {
          //   color: 0x00ff00,
          // },
          name: 'board',
          bounds: { x: 0.3, y: 0.15, width: 0.4, height: 0.7 },
          align: CellAlign.centerTop,
          scale: CellScale.showAll,
          // padding: 0.1,
          // debug: {
          //   color: 0xbdcfdd,
          //   fill: true,
          // },
        },
        {
          name: 'scoreBox',
          bounds: { x: 0.3, y: 0.05, width: 0.18, height: 0.08 },
          // align: CellAlign.centerTop,
          // padding: 0.1,
          // debug: {
          //   color: 0x0000ff,
          //   fill: true,
          // },
        },
        {
          name: 'gameOver',
          bounds: { x: 0.3, y: 0.25, width: 0.4, height: 0.45 },
          // align: CellAlign.centerTop,
          // padding: 0.1,
          // debug: {
          //   color: 0x0000ff,
          //   fill: true,
          // },
        },
        {
          name: 'nextBalls',
          bounds: { x: 0.52, y: 0.05, width: 0.18, height: 0.08 },
          align: CellAlign.leftCenter,
          // padding: 0.1,
          // debug: {
          //   color: 0x000000,
          //   fill: true,
          // },
        },
      ],
    },
    {
      // debug: {
      //   color: 0xff0000,
      // },
      name: 'game',
      cells: [
        {
          name: 'board',
          bounds: { x: 0.3, y: 0.15, width: 0.4, height: 0.7 },
          align: CellAlign.centerTop,
          scale: CellScale.showAll,

          // debug: {
          //   color: 0xbdcfdd,
          //   fill: true,
          // },
        },
        {
          name: 'scoreBox',
          bounds: { x: 0.3, y: 0.05, width: 0.18, height: 0.08 },
          // align: CellAlign.centerTop,
          // padding: 0.1,
          // debug: {
          //   color: 0x0000ff,
          //   fill: true,
          // },
        },
        {
          name: 'gameOver',
          bounds: { x: 0.3, y: 0.25, width: 0.4, height: 0.45 },
          // align: CellAlign.centerTop,
          // padding: 0.1,
          // debug: {
          //   color: 0x0000ff,
          //   fill: true,
          // },
        },
        {
          name: 'nextBalls',
          bounds: { x: 0.5, y: 0.05, width: 0.2, height: 0.08 },
          // align: CellAlign.centerTop,
          // padding: 0.1,
          // debug: {
          //   color: 0x000000,
          //   fill: true,
          // },
        },
      ],
    }
  );
}
