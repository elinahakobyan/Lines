import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { gameGridConfig } from '../configs/game-grid-config';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { BoardView } from './board-view';
import { gameOverView } from './game-over-view';
import { ScoreBoxView } from './score-box-view';

export class GameView extends PixiGrid {
  getGridConfig() {
    return gameGridConfig();
  }

  constructor() {
    super();
    lego.event.on(ModelEvents.GameModel.BoardUpdate, this._onBoardUpdate, this);
    lego.event.on(ModelEvents.GameModel.ScoreBoxUpdate, this._onScoreBoxUpdate, this);
    lego.event.on(ModelEvents.BoardModel.GameOverUpdate, this._onGameOverUpdate, this);
  }

  // rebuild() {
  //   super.rebuild(this.getGridConfig());
  // }

  _onBoardUpdate(boardModel) {
    boardModel ? this._buildBoardView(boardModel) : this._destroyBoardView();
  }

  _onScoreBoxUpdate(scoreBoxModel) {
    scoreBoxModel ? this._buildScoreBoxView(scoreBoxModel) : this._destroyScoreBoxeView();
  }

  _buildBoardView(boardModel) {
    this._boardView = new BoardView(boardModel);
    this.setChild('board', this._boardView);
  }

  _buildScoreBoxView(scoreBoxModel) {
    this._scoreBoxView = new ScoreBoxView(scoreBoxModel);
    this.setChild('scoreBox', this._scoreBoxView);
  }

  _destroyBoardView() {
    this._boardView.destroy({ children: true });
  }

  _destroyScoreBoxeView() {
    this._scoreBoxView.destroy({ children: true });
  }
  _onGameOverUpdate(newvalue) {
    newvalue ? this._createGameOverView(newvalue) : console.warn('nnnnnnnnnnnnnnnnnn');
  }

  _createGameOverView(newvalue) {
    this._gameOver = new gameOverView();
    this._gameOver.position.set(390, 280);

    this.addChild(this._gameOver);
  }

  _destroyeGameOverView() {
    this.removeChild(this._gameOver);
    this._gameOver = null;
    return this._gameOver;
  }
}
