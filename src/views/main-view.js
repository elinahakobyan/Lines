import { CellAlign, CellScale, PixiGrid } from '@armathai/pixi-grid';
import { mainGridConfig } from '../configs/main-grid-config';

export class MainView extends PixiGrid {
  getGridConfig() {
    return mainGridConfig();
  }

  constructor() {
    super();

    this._build();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _build() {
    const sprite = PIXI.Sprite.from('logo');
    this.setChild('logo', sprite);
  }
}
