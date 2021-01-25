import { boardConfig } from '../configs/board-config';
import { GameModel } from './game-model';
import { ObservableModel } from './observable-model';
import { ScoreBoxModel } from './score-box-model';

class Store extends ObservableModel {
  constructor() {
    super('Store');

    this._game = null;
    this._scoreBox = null;

    this.makeObservable();
  }

  get game() {
    return this._game;
  }

  get scoreBox() {
    return this._scoreBox;
  }

  initializeGameModel() {
    this._game = new GameModel();
    this._game.initialize();
  }

  initializeScoreBoxModel() {
    this._scoreBox = new ScoreBoxModel();
    this._scoreBox.initialize();
  }

  destroyGameModel() {
    this._game.destroy();
    this._game = null;
  }
}

export const store = new Store();
