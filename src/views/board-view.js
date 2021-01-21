import { lego } from '@armathai/lego';
import { BoardDimension } from '../constants';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { CellView } from './cell-view';
import chunk from 'lodash.chunk';

export class BoardView extends PIXI.Container {
  constructor() {
    super();

    this._cells = [];
    lego.event.on(ModelEvents.BoardModel.CellsUpdate, this._onCellsUpdate, this);
  }

  getCellByUuid(uuid) {
    return this._cells.find((cell) => cell.uuid === uuid);
  }

  _onCellsUpdate(cells) {
    this._createCells(cells);
    lego.event.emit(ViewEvents.BoardView.CreateBoard);
  }

  _onCellClick(uuid) {
    console.warn(uuid);
    lego.event.emit(ViewEvents.BoardView.CellClick, uuid);
  }

  _createCells(cells) {
    const { width, height } = BoardDimension;
    const cells2D = chunk(cells, width);

    const gap = 15;
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const cell = cells2D[i][j];
        const cellView = new CellView(i, j, cell.uuid);
        cellView.on(ViewEvents.CellView.OnClick, this._onCellClick, this);

        cellView.position.set(i * (cellView.width + gap), j * (cellView.height + gap));

        this.addChild(cellView);
        this._cells.push(cellView);
      }
    }
  }
}
