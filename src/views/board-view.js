import { lego } from '@armathai/lego';
import { BoardDimension } from '../constants';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { CellView } from './cell-view';

export class BoardView extends PIXI.Container {
  constructor() {
    super();

    lego.event.on(ModelEvents.BoardModel.CellsUpdate, this._onCellsUpdate, this);
  }

  _onCellsUpdate(cells) {
    this._createCells(cells);
    lego.event.emit(ViewEvents.BoardView.CreateBoard);
  }

  _createCells(cells) {
    const gap = 15;
    const { width, height } = BoardDimension;
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const cell = cells[i][i];
        cell = new CellView(i, j);
        cell.position.set(i * (cell.width + gap), j * (cell.height + gap));
        this.addChild(cell);
      }
    }
  }
}
