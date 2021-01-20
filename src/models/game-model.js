import { ObservableModel } from './observable-model';
import { BoardModel } from './board-model';

export class GameModel extends ObservableModel {
  constructor() {
    super('GameModel');

    this._board = null;

    this.makeObservable();
  }

  get board() {
    return this._board;
  }

  initialize() {
    this._board = new BoardModel();
    this._board.initialize();
  }
}
