import { TilingSprite } from 'pixi.js';

export class gameOverView extends PIXI.Container {
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
    this.addChild(gr);
    this._createGameOverText();
  }

  _createGameOverText() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 60,
      fill: 0xd868b1,
      align: 'center',
    });
    const text = new PIXI.Text('Game Over', style);
    text.position.set(180, 110);

    this.addChild(text);
  }
}
