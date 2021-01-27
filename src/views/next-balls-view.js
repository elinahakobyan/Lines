import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { BallView } from './ball-view';

export class NextBallsView extends PIXI.Container {
  constructor(nextBallModel) {
    super();
    this._ball = null;
    lego.event.on(ModelEvents.NextBallsModel.BallsUpdate, this._onBallsUpdate, this);
  }

  get name() {
    return 'BallView';
  }

  _onBallsUpdate(newvalue) {
    newvalue.forEach((type, index) => {
      this._ball = new BallView(type);
      this._ball.x += 120 * index;
      this.addChild(this._ball);
    });
  }
}
