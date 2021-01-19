import { lego } from '@armathai/lego';

const getUUID = (() => {
  let num = 0;
  return (prefix = '') => {
    num += 1;
    const value = num < 10 ? `0${num}` : num;
    return `${prefix}${value.toString()}`;
  };
})();

export class ObservableModel {
  constructor(name) {
    this.__name__ = name;
    this._uuid = getUUID(this.__name__);
  }

  get uuid() {
    return this._uuid;
  }

  makeObservable(...properties) {
    lego.observe.makeObservable(this, ...properties);
  }

  createObservable(property, value) {
    lego.observe.createObservable(this, property, value);
  }

  removeObservable(...properties) {
    lego.observe.removeObservable(this, ...properties);
  }

  initialize() {}

  destroy() {}
}
