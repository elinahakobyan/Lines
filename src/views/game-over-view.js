import { ViewEvents } from '../events/view-events';
import { store } from '../models/store';

export class GameOverView extends PIXI.Container {
  constructor() {
    super();
    this._build();
  }

  _build() {
    this._createGameOverBg();
    this._createGameOverText();
    this._score();
    this._retryButton();
  }

  _createGameOverBg() {
    const gr = new PIXI.Graphics();
    gr.beginFill(0xa6e8de, 0.9);
    gr.drawRoundedRect(0, 0, 650, 300, 60);
    gr.endFill();
    this.addChild((this._gr = gr));
  }

  _createGameOverText() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 55,
      fill: 0xd868b1,
      align: 'center',
    });

    const text = new PIXI.Text('Game Over', style);
    text.position.set(150, 50);
    this.addChild(text);
  }

  _retryButton() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 55,
      fill: 0xd868b1,
      align: 'center',
    });
    const text = new PIXI.Text('Retry', style);
    text.position.set(240, 210);
    this.addChild(text);
    text.interactive = true;

    text.on('pointerdown', () => {
      this.emit(ViewEvents.GameOverView.OnClick);
    });
  }

  _score() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 55,
      fill: 0xd868b1,
      align: 'center',
    });
    const score = store.game.board.score;
    const text = new PIXI.Text('Score : ' + score, style);
    text.position.set(190, 130);

    this.addChild(text);
  }
}
