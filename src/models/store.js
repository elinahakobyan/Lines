import { GameModel } from './game-model';
import { ObservableModel } from './observable-model';

class Store extends ObservableModel {
  constructor() {
    super('Store');

    this._game = null;

    this.makeObservable();
  }

  get game() {
    return this._game;
  }

  initializeGameModel() {
    this._game = new GameModel();
    this._game.initialize();
  }

  destroyGameModel() {
    this._game.destroy();
    this._game = null;
  }
}

export const store = new Store();
