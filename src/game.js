import { lego } from '@armathai/lego';
import { legologger } from '@armathai/lego-logger';
import * as PIXI from 'pixi.js';
import { startupCommand } from './commands/startupCommand';
import { ViewEvents } from './events/view-events';
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
    // this.loader.add('logo', 'assets/logo.png');
    this.loader.load(() => {
      this._build();
      lego.event.emit(ViewEvents.Game.LoadComplete);
    });
  }

  _build() {
    this.stage.addChild((this._mainView = new MainView()));
  }
}
