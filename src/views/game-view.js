import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { gameGridConfig } from '../configs/game-grid-config';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { BoardView } from './board-view';
import { GameOverView } from './game-over-view';
import { NextBallsView } from './next-balls-view';
import { ScoreBoxView } from './score-box-view';

export class GameView extends PixiGrid {
  constructor() {
    super();
    lego.event.on(ModelEvents.GameModel.BoardUpdate, this._onBoardUpdate, this);
    lego.event.on(ModelEvents.BoardModel.GameOverUpdate, this._onGameOverUpdate, this);
    lego.event.on(ModelEvents.GameModel.ScoreBoxUpdate, this._onScoreBoxUpdate, this);
    lego.event.on(ModelEvents.GameModel.NextBallsUpdate, this._onNextBallsUpdate, this);
    lego.event.on(ModelEvents.ScoreBoxModel.TextUpdate, this._onTextUpdate, this);
  }

  getGridConfig() {
    return gameGridConfig();
  }

  destroy(options) {
    lego.event.off(ModelEvents.GameModel.BoardUpdate, this._onBoardUpdate, this);
    lego.event.off(ModelEvents.GameModel.ScoreBoxUpdate, this._onScoreBoxUpdate, this);
    lego.event.off(ModelEvents.BoardModel.GameOverUpdate, this._onGameOverUpdate, this);
    lego.event.off(ModelEvents.GameModel.NextBallsUpdate, this._onNextBallsUpdate, this);

    super.destroy(options);
  }

  rebuild(config = this.getGridConfig()) {
    super.rebuild(config);
  }

  _onBoardUpdate(boardModel) {
    boardModel ? this._buildBoardView(boardModel) : this._destroyBoardView();
  }

  _onScoreBoxUpdate(scoreBoxModel) {
    scoreBoxModel ? this._buildScoreBoxView(scoreBoxModel) : this._destroyScoreBoxView();
  }

  _buildBoardView(boardModel) {
    this._boardView = new BoardView(boardModel);
    this.setChild('board', this._boardView);
  }

  _buildScoreBoxView(scoreBoxModel) {
    this._scoreBoxView = new ScoreBoxView(scoreBoxModel);
    this.setChild('scoreBox', this._scoreBoxView);
  }

  _onTextUpdate() {
    this.setChild('scoreBox', this._scoreBoxView);
  }

  _destroyBoardView() {
    this._boardView.destroy();
  }

  _destroyScoreBoxView() {
    this._scoreBoxView.destroy({ children: true });
  }

  _onGameOverUpdate(newValue) {
    newValue ? this._createGameOverView(newValue) : this._destroyGameOverView();
  }

  _createGameOverView() {
    this._boardView.disableAllBalls();

    this._gameOver = new GameOverView();
    this._gameOver.on(ViewEvents.GameOverView.OnClick, this._onRetryClick, this);
    this.setChild('gameOver', this._gameOver);
  }

  _destroyGameOverView() {
    this.removeChild(this._gameOver);
    this._gameOver = null;
  }

  _onRetryClick() {
    lego.event.emit(ViewEvents.GameView.RetryClick);
  }

  _onNextBallsUpdate(newValue) {
    this._nextBalls = new NextBallsView(newValue);
    this.setChild('nextBalls', this._nextBalls);
  }
}
