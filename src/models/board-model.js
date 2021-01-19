import { CellModel } from './cell-model';
import { ObservableModel } from './observable-model';

export class BoardModel extends ObservableModel {
  constructor() {
    super('BoardModel');

    this._cells = [];
    this._build();

    this.makeObservable();
  }

  get cells() {
    return this._cells;
  }

  _build() {
    this.createCells();
  }

  createCells() {
    const size = 8;
    const gap = 10;

    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        const cell = new CellModel(i, j);
        row.push(cell);
      }
      this._cells.push(row);
    }
  }
}
