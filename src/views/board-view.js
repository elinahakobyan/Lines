import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';

export class BoardView extends PIXI.Container {
  constructor() {
    super();
    lego.event.on(ModelEvents.GameModel.BoardModelUpdate);
    this._build();
  }
  get name() {
    return 'BoardView';
  }

  _build() {
    console.warn('aa');
  }
}
