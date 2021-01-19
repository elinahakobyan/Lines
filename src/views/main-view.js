import { lego } from '@armathai/lego';
import { CellAlign, CellScale, PixiGrid } from '@armathai/pixi-grid';
import { mainGridConfig } from '../configs/main-grid-config';
import { ModelEvents } from '../events/model-events';
import { BoardView } from './board-view';
import { GameView } from './game-view';

export class MainView extends PixiGrid {
  getGridConfig() {
    return mainGridConfig();
  }

  constructor() {
    super();

    this._build();
    lego.event.on(ModelEvents.Store.GameUpdate, this._onGameUpdate, this);
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _build() {}

  _onGameUpdate(gameModel) {
    gameModel ? this._buildGameView(gameModel) : this._destroyGameView();
  }

  _buildGameView(gameModel) {
    this.addChild((this._gameView = new GameView(gameModel)));
  }

  _destroyGameView() {
    if (this._gameView) {
      this._gameView.destroy();
      this._gameView = null;
    }
  }
}
