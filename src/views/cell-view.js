import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { BallView } from './ball-view';
import { ViewEvents } from '../events/view-events';

export class CellView extends PIXI.Container {
  constructor(row, col, uuid) {
    super();
    this._row = row;
    this._col = col;
    this._ball = null;
    this._uuid = uuid;
    this.interactive = true;
    this._addEvent();
    lego.event.on(ModelEvents.CellModel.BallUpdate, this._onBallUpdate, this);
    lego.event.on(ModelEvents.CellModel.ActivateUpdate, this._onBallUpdate, this);

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

  get uuid() {
    return this._uuid;
  }

  _buildBg() {
    const gr = new PIXI.Graphics();
    gr.beginFill(0xe8bacc);
    gr.drawRect(-50, -50, 100, 100);
    gr.endFill();
    this.addChild(gr);
  }

  _onBallUpdate(newValue, oldValue, uuid) {
    if (uuid !== this._uuid) {
      return;
    }
    newValue ? this._buildBallView(newValue) : this._destroyeBallView();
  }

  _buildBallView(ballModel) {
    this.addChild((this._ball = new BallView(ballModel)));
    this._ball.activate();
  }

  _addEvent() {
    this.on('pointerdown', () => {
      this.emit(ViewEvents.CellView.OnClick, this._uuid);
    });
  }

  // _destroyeBallView() {
  //   this._cellView.destroy({ children: true });
  // }
}
