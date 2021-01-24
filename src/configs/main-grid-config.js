import { CellAlign, CellScale } from '@armathai/pixi-grid';

function LP(l, p) {
  return window.innerWidth > window.innerHeight ? l : p;
}

export function mainGridConfig() {
  return LP(
    {

      name: 'main',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          name: 'board',
          bounds: { x: 0.3, y: 0.15, width: 0.4, height: 0.7 },
          align: CellAlign.centerTop,
          // padding: 0.1,
          // debug: {
          //   color: 0xbdcfdd,
          //   fill: true,
          // },
        },
        {
          name: 'scoreBox',
          bounds: { x: 0.3, y: 0.05, width: 0.4, height: 0.1 },
          scale: CellScale.fill,

        },
        {
          name: 'scoreText',
          bounds: { x: 0.3, y: 0.06, width: 0.1, height: 0.04 },
          scale: CellScale.fill,

        }
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
          name: 'board',
          bounds: { x: 0.3, y: 0.15, width: 0.4, height: 0.7 },
          align: CellAlign.centerTop,

          debug: {
            color: 0xbdcfdd,
            fill: true,
          },
        },
        {
          name: 'scoreBox',
          bounds: { x: 0.3, y: 0.05, width: 0.4, height: 0.1 },
          scale: CellScale.fill,
        }
      ],
    }
  );
}
