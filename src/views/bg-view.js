import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { TextView } from './text-view';

export class BgView extends PIXI.Container {
  constructor(textModel) {
    super();
    // this._build()
    this._text = null;
    lego.event.on(ModelEvents.BgModel.TextUpdate, this._onTextUpdate, this);
  }

  get name() {
    return 'ScoreBoxView';
  }

  get text() {
    return this._text;
  }

  _build() {
    const gr = new PIXI.Graphics();
    gr.beginFill(0xc1dbf1);
    gr.drawRect(0, 0, 100, 100);
    gr.endFill();
    this.addChild(gr);
  }

  _onTextUpdate(textModel) {
    textModel ? this._buildTextView(textModel) : this._destroyTextView();
  }

  _buildTextView(textModel) {
    this.addChild((this._text = new TextView(textModel.type)));
  }

  _destroyTextView() {
    this._text.destroy({ children: true });
  }
}
