import { lego } from '@armathai/lego';
import { CellAlign, CellScale, PixiGrid } from '@armathai/pixi-grid';
import { mainGridConfig } from '../configs/main-grid-config';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { BoardView } from './board-view';
import { GameView } from './game-view';

export class MainView extends PixiGrid {
  getGridConfig() {
    return mainGridConfig();
  }

  constructor() {
    super();

    lego.event.on(ModelEvents.Store.GameUpdate, this._onGameUpdate, this);
    lego.event.on(ViewEvents.BoardView.CreateBoard, this.rebuild, this);
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _onGameUpdate(gameModel) {
    gameModel ? this._buildGameView(gameModel) : this._destroyGameView();
  }

  _buildGameView(gameModel) {
    this._gameView = new GameView(gameModel);
    this.setChild('board', this._gameView);
  }

  _destroyGameView() {
    this._gameView.destroy({ children: true });
  }
}
