import { lego } from '@armathai/lego';
import { ViewEvents } from '../events/view-events';
import { BallModel } from './ball-model';
import { ObservableModel } from './observable-model';

export class CellModel extends ObservableModel {
  constructor(row, col) {
    super('CellModel');

    this._row = row;
    this._col = col;
    this._ball = null;
    this._isSelected = false;
    this._fakeBall = null;
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

  get isSelected() {
    return this._isSelected;
  }

  get fakeBall() {
    return this._fakeBall;
  }

  setBall(type) {
    this._fakeBall = type;
  }

  deleteBall() {
    this._fakeBall = null;
  }

  select() {
    this._isSelected = true;
  }

  deselect() {
    this._isSelected = false;
  }

  addBall(type) {
    this._ball = new BallModel(type);
    this._ball.initialize();
  }

  removeBall() {
    const ball = this._ball;
    this._ball = null;
    return ball;
  }
}
