import { ObservableModel } from './observable-model';
import { boardConfig } from '../configs/board-config';
import sample from 'lodash.sample';
import { BALLS } from '../constants';
import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';

export class NextBallsModel extends ObservableModel {
  constructor() {
    super('NextBallsModel');

    this._balls = null;
    this.makeObservable();
  }

  get balls() {
    return this._balls;
  }

  initialize() {
    this._generateNextBalls();
  }

  _generateNextBalls() {
    const balls = [];
    const { spawnBallsCount } = boardConfig;
    for (let i = 0; i < spawnBallsCount; i++) {
      balls.push(sample(BALLS));
    }
    this._balls = balls;
  }

  updateNextBalls(newValue) {
    this._generateNextBalls();
  }
}
