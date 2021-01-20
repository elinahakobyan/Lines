import { CellAlign, CellScale } from '@armathai/pixi-grid';

function LP(l, p) {
  return window.innerWidth > window.innerHeight ? l : p;
}

export function mainGridConfig() {
  return LP(
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
          // padding: 0.1,
          // debug: {
          //   color: 0xbdcfdd,
          //   fill: true,
          // },
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
          name: 'board',
          bounds: { x: 0.3, y: 0.15, width: 0.4, height: 0.7 },
          // debug: {
          //   color: 0xbdcfdd,
          //   fill: true,
          // },
        },
      ],
    }
  );
}
