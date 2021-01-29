import { ObservableModel } from './observable-model';

export class ScoreBoxModel extends ObservableModel {
  constructor() {
    super('ScoreBoxModel');
    this._text = null;
    this.makeObservable();
  }

  get text() {
    return this._text;
  }

  addText(value) {
    this._text = value;
  }

  initialize() {
    //
  }
}
