import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { BoardView } from './board-view';

export class GameView extends PIXI.Container {
  constructor() {
    super();

    lego.event.on(ModelEvents.GameModel.BoardUpdate, this._onBoardUpdate, this);
  }

  _onBoardUpdate(boardModel) {
    boardModel ? this._buildBoardView(boardModel) : this._destroyBoardView();
  }

  _buildBoardView(boardModel) {
    this.addChild((this._boardView = new BoardView(boardModel)));
  }

  _destroyBoardView() {
    this._boardView.destroy({ children: true });
  }
}
