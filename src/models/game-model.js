import { ObservableModel } from './observable-model';
import { BoardModel } from './board-model';
import { boardConfig } from '../configs/board-config';
import { ScoreBoxModel } from './score-box-model';

export class GameModel extends ObservableModel {
  constructor() {
    super('GameModel');

    this._board = null;
    this._scoreBox = null;

    this.makeObservable();
  }

  get board() {
    return this._board;
  }

  get scoreBox() {
    return this._scoreBox;
  }

  initialize() {
    const config = boardConfig;
    this._board = new BoardModel(config);
    this._board.initialize();
    this._scoreBox = new ScoreBoxModel();
    this._scoreBox.addText();
  }
}
