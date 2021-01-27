import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { CellView } from './cell-view';
import chunk from 'lodash.chunk';
import { boardConfig } from '../configs/board-config';

export class BoardView extends PIXI.Container {
  constructor() {
    super();

    this._cells = [];
    lego.event.on(ModelEvents.BoardModel.CellsUpdate, this._onCellsUpdate, this);
    lego.event.on(ModelEvents.CellModel.IsSelectedUpdate, this._onSelectedUpdate, this);
  }

  destroy(options) {
    lego.event.off(ModelEvents.BoardModel.CellsUpdate, this._onCellsUpdate, this);
    lego.event.off(ModelEvents.CellModel.IsSelectedUpdate, this._onSelectedUpdate, this);

    super.destroy(options);
  }

  getCellByUuid(uuid) {
    return this._cells.find((cell) => cell.uuid === uuid);
  }

  _onCellsUpdate(cells) {
    this._createCells(cells);
    lego.event.emit(ViewEvents.BoardView.CreateBoard);
  }

  _onCellClick(uuid) {
    lego.event.emit(ViewEvents.BoardView.CellClick, uuid);
  }

  _onSelectedUpdate(newvalue, oldvalue, uuid) {
    const cell = this.getCellByUuid(uuid);
    newvalue ? cell.select() : cell.deselect();
  }

  _createCells(cells) {
    const { boardDimension } = boardConfig;
    const cells2D = chunk(cells, boardDimension);

    const gap = 15;
    for (let i = 0; i < boardDimension; i++) {
      for (let j = 0; j < boardDimension; j++) {
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
