import { ObservableModel } from './observable-model';
import { BoardModel } from './board-model';
import { boardConfig } from '../configs/board-config';
import { ScoreBoxModel } from './score-box-model';
import { NextBallsModel } from './next-balls-model';

export class GameModel extends ObservableModel {
  constructor() {
    super('GameModel');

    this._board = null;
    this._scoreBox = null;
    this._nextBalls = null;

    this.makeObservable();
  }

  get board() {
    return this._board;
  }

  get scoreBox() {
    return this._scoreBox;
  }

  get nextBalls() {
    return this._nextBalls;
  }

  initialize() {
    const config = boardConfig;
    this._nextBalls = new NextBallsModel();
    this._nextBalls.initialize();
    this._board = new BoardModel(config);
    this._board.initialize();
    this._scoreBox = new ScoreBoxModel();
    this._scoreBox.addText(this._board.score);
  }
}
