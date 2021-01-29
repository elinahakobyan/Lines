import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { scoreBoxGridConfig } from '../configs/score-box-grid-config';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';

export class ScoreBoxView extends PixiGrid {
  constructor(scoreBoxModel) {
    super();
    this._build();
    lego.event.on(ModelEvents.ScoreBoxModel.TextUpdate, this._onTextUpdate, this);
  }

  destroy(options) {
    lego.event.off(ModelEvents.ScoreBoxModel.TextUpdate, this._onTextUpdate, this);

    super.destroy(options);
  }

  getGridConfig() {
    return scoreBoxGridConfig();
  }

  rebuild(config = this.getGridConfig()) {
    super.rebuild(config);
  }

  _onTextUpdate(value) {
    this._text.text = `Score : ${value}`;
    this.rebuild();
  }

  _build() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 60,
      fill: 0xa6b0e8,
      align: 'center',
    });
    this._text = new PIXI.Text('Score : 0', style);
    this.setChild('scoreText', this._text);
  }
}
