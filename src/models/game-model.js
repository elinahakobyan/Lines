import { ObservableModel } from './observable-model';
import { BoardModel } from './board-model';
import { boardConfig } from '../configs/board-config';

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
    const config = boardConfig;

    this._board = new BoardModel(config);
    this._board.initialize();
  }
}
