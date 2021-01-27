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
          //   debug: {
          //     color: 0x00ff00,
          //   },
          name: 'board',
          bounds: { x: 0.25, y: 0.15, width: 0.5, height: 0.7 },
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
          bounds: { x: 0.3, y: 0.06, width: 0.4, height: 0.09 },
          // align: CellAlign.centerTop,
          // padding: 0.1,
          //   debug: {
          //     color: 0x0000ff,
          //     fill: true,
          //   },
        },
        {
          name: 'gameOver',
          bounds: { x: 0.3, y: 0.25, width: 0.4, height: 0.5 },
          // align: CellAlign.centerTop,
          // padding: 0.1,
          //   debug: {
          //     color: 0x0000ff,
          //     fill: true,
          //   },
        },
      ],
    },
    {
      debug: {
        color: 0xff0000,
      },
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
          bounds: { x: 0.3, y: 0.06, width: 0.4, height: 0.09 },
          align: CellAlign.centerTop,
          // padding: 0.1,
          //   debug: {
          //     color: 0x0000ff,
          //     fill: true,
          //   },
        },
        {
          name: 'gameOver',
          bounds: { x: 0.3, y: 0.25, width: 0.4, height: 0.5 },
          // align: CellAlign.centerTop,
          // padding: 0.1,
          //   debug: {
          //     color: 0x0000ff,
          //     fill: true,
          //   },
        },
      ],
    }
  );
}
