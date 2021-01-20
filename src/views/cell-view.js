import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { BallView } from './ball-view';

export class CellView extends PIXI.Container {
  constructor(row, col) {
    super();
    this._row = row;
    this._col = col;
    this._ball = null;

    lego.event.on(ModelEvents.CellModel.BallUpdate, this._onBallUpdate, this);
    this._buildBg();
  }

  get name() {
    return 'CellView';
  }

  get row() {
    return this._row;
  }

  get col() {
    return this._col;
  }

  _buildBg() {
    const gr = new PIXI.Graphics();
    gr.beginFill(0xe8bacc);
    gr.drawRect(0, 0, 100, 100);
    gr.endFill();
    this.addChild(gr);
  }

  _onBallUpdate(ballModel) {
    ballModel ? this._buildBallView(ballModel) : this._destroyeBallView();
  }

  _buildBallView(ballModel) {
    this.addChild((this._ballView = new BallView(ballModel)));
    // console.warn(boardModel);
  }

  // _destroyeBallView() {
  //   this._cellView.destroy({ children: true });
  // }
}
