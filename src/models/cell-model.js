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
    this._isActive = false;
    this.makeObservable();
    // lego.event.on(ViewEvents.CellView.OnClick,this.)
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

  get isActive() {
    return this._isActive;
  }

  activate() {
    this._isActive = true;
  }

  deactivate() {
    this._activate = false;
  }

  addBall(type) {
    this._ball = new BallModel(type);
    this._ball.initialize();
  }
}
