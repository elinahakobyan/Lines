import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';

export class ScoreBoxView extends PIXI.Container {
  constructor(scoreBoxModel) {
    super();
    this._build();

    lego.event.on(ModelEvents.ScoreBoxModel.TextUpdate, this._onTextUpdate, this);
  }

  destroy(options) {
    lego.event.off(ModelEvents.ScoreBoxModel.TextUpdate, this._onTextUpdate, this);

    super.destroy(options);
  }

  _onTextUpdate(value) {
    this._text.text = `Score : ${value}`;
  }

  _build() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 50,
      fill: 0xa6b0e8,
      align: 'center',
    });

    this._text = new PIXI.Text('Score : 0', style);
    this.addChild(this._text);
  }
}
