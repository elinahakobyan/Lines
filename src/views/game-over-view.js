import { PixiGrid } from '@armathai/pixi-grid';
import { gameOverGridConfig } from '../configs/game-over-grid-config';
import { ViewEvents } from '../events/view-events';
import { store } from '../models/store';

export class gameOverView extends PixiGrid {
  getGridConfig() {
    return gameOverGridConfig();
  }

  constructor() {
    super();
    this._build();
  }

  _build() {
    this._createGameOverTable();
  }

  _createGameOverTable() {
    const gr = new PIXI.Graphics();
    gr.beginFill(0xa6e8de);
    gr.drawRect(0, 0, 650, 350);
    gr.endFill();
    this.setChild('bg', gr);
    this._createGameOverText();
  }

  _createGameOverText() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 80,
      fill: 0xd868b1,
      align: 'center',
    });
    const text = new PIXI.Text('Game Over', style);
    this.setChild('text', text);
    this._score();
    this._retryButton();
  }

  _retryButton() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 80,
      fill: 0xd868b1,
      align: 'center',
    });
    const text = new PIXI.Text('Retry', style);
    this.setChild('retry', text);
    text.interactive = true;

    text.on('pointerdown', () => {
      this.emit(ViewEvents.GameOverView.OnClick);
    });
  }

  _score() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 80,
      fill: 0xd868b1,
      align: 'center',
    });
    const score = store.game.board.score;
    const text = new PIXI.Text('Score :' + score, style);
    this.setChild('score', text);
  }
}
