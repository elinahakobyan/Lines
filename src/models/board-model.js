import { CellModel } from './cell-model';
import { ObservableModel } from './observable-model';
import { BALLS, BoardDimension, EntryCellsCount } from '../constants';
import sampleSize from 'lodash.samplesize';
import { BallModel } from './ball-model';
import sample from 'lodash.sample';

export class BoardModel extends ObservableModel {
  constructor() {
    super('BoardModel');

    this._cells = null;
    this.makeObservable();
  }

  get cells() {
    return this._cells;
  }

  getEmptyCells(count) {
    const emptyCells = sampleSize(
      this._cells.filter((cell) => cell.isEmpty),
      count
    );

    return emptyCells;
  }

  setBallsIntoCells() {
    const { count } = EntryCellsCount;
    const emptyCells = this.getEmptyCells(count);
    console.warn(emptyCells);
    emptyCells.forEach((cell) => {
      cell.addBall(sample(BALLS));
    });
  }

  initialize() {
    this._initCells();
    this.setBallsIntoCells();
  }

  _initCells() {
    const cells = [];

    const { width, height } = BoardDimension;
    const gap = 10;
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const cell = new CellModel(i, j);
        cells.push(cell);
      }
    }
    this._cells = cells;
  }
}
