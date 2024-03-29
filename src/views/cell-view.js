import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { BallView } from './ball-view';

export class CellView extends PIXI.Container {
  constructor(row, col, uuid) {
    super();
    this._row = row;
    this._col = col;
    this._ball = null;
    this._uuid = uuid;
    this._addEvent();
    lego.event.on(ModelEvents.CellModel.BallUpdate, this._onBallUpdate, this);
    lego.event.on(ModelEvents.CellModel.FakeBallUpdate, this._onFakeBallUpdate, this);
    lego.event.on(ModelEvents.BoardModel.StateUpdate, this._onStateUpdate, this);

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

  _onStateUpdate(state) {
    if (state === 'generateNewBalls' || state === 'match' || state === 'moving') {
      this.interactive = false;
    } else {
      this.interactive = true;
    }
  }

  destroy(options) {
    lego.event.off(ModelEvents.CellModel.BallUpdate, this._onBallUpdate, this);
    lego.event.off(ModelEvents.CellModel.FakeBallUpdate, this._onFakeBallUpdate, this);

    super.destroy(options);
  }

  select() {
    this._ball.activate();
  }

  deselect() {
    this._ball.deactivate();
  }

  _buildBg() {
    const gr = new PIXI.Graphics();
    gr.beginFill(0xc1c1c1);
    gr.drawRect(-50, -50, 100, 100);
    gr.endFill();
    this.addChild(gr);
  }

  _onBallUpdate(newValue, oldValue, uuid) {
    if (uuid !== this._uuid) {
      return;
    }
    newValue ? this._buildBallView(newValue.type) : this._destroyeBallView();
  }

  _onFakeBallUpdate(newValue, oldValue, uuid) {
    if (uuid !== this._uuid) {
      return;
    }
    newValue ? this._buildBallView(newValue) : this._destroyeBallView();
  }

  _buildBallView(type) {
    this.addChild((this._ball = new BallView(type)));
  }

  _destroyeBallView() {
    this.removeChild(this._ball);
    this.ball = null;
    return this._ball;
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
