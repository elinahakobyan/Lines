import { lego } from '@armathai/lego';
import { ObservableModel } from './observable-model';
import { BoardModel } from './board-model';

export class GameModel extends ObservableModel {
  constructor() {
    super('GameModel');

    this._boardModel = null;

    this.makeObservable();
    this.initializeBoard();
  }

  get boardModel() {
    return this._boardModel;
  }

  initializeBoard() {
    this._boardModel = new BoardModel();
    this._boardModel.initialize();
  }
}
