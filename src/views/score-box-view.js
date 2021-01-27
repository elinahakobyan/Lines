import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { scoreBoxGridConfig } from '../configs/score-box-grid-config';
import { ModelEvents } from '../events/model-events';

import { TextView } from './text-view';

export class ScoreBoxView extends PixiGrid {
  getGridConfig() {
    return scoreBoxGridConfig();
  }

  constructor() {
    super();
    this._text = null;
    lego.event.on(ModelEvents.ScoreBoxModel.TextUpdate, this._onTextUpdate, this);
  }

  destroy(options) {
    lego.event.off(ModelEvents.ScoreBoxModel.TextUpdate, this._onTextUpdate, this);

    super.destroy(options);
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  get name() {
    return 'ScoreBoxView';
  }

  get text() {
    return this._text;
  }

  _onTextUpdate(textModel) {
    textModel ? this._buildTextView(textModel) : this._destroyTextView();
  }

  _buildTextView(textModel) {
    this._text = new TextView(textModel.type);
    this.setChild('scoreText', this._text);
  }

  _destroyTextView() {
    this._text.destroy({ children: true });
  }
}
