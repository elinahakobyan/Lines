import * as PIXI from 'pixi.js';
import { MainView } from './views/main-view';

export class Game extends PIXI.Application {
  constructor() {
    super({
      backgroundColor: 0xffffff,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', this._resize.bind(this));

    document.body.appendChild(this.view);
    this._loadAssets();
  }

  _resize() {
    this.renderer.resize(window.innerWidth, window.innerHeight);
    this._mainView.rebuild();
  }

  _loadAssets() {
    this.loader.add('logo', 'assets/logo.png');
    this.loader.load(() => {
      this._build();
    });
  }

  _build() {
    this.stage.addChild((this._mainView = new MainView()));
  }
}
