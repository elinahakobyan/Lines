import { ObservableModel } from './observable-model';

export class BallModel extends ObservableModel {
  constructor(type) {
    super('BallModel');
    this._type = type;
    this.makeObservable();
    this.initialize();
  }

  get type() {
    return this._type;
  }

  initialize() {
    //
  }
}
