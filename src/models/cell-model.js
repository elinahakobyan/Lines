import { ObservableModel } from './observable-model';

export class CellModel extends ObservableModel {
  constructor(row, col) {
    super('CellModel');

    this._row = row;
    this._col = col;
    this._ball = null;

    this.makeObservable();
  }

  get row() {
    return this._row;
  }

  get col() {
    return this._col;
  }

  get ball() {
    return this._ball;
  }

  get isEmpty() {
    return !this._ball;
  }

  addBall(ball) {
    this._ball = ball;
  }

  removeball() {
    const ball = this._ball;
    this._ball = null;
    return ball;
  }

  _build() {
    const gr = new PIXI.Graphics();
    gr.beginFill(0xf2f6f9);
    gr.drawRect(0, 0, 150, 150);
    gr.endFill();
    this.addChild(gr);
  }
}
