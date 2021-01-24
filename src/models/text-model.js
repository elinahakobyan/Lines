import { ObservableModel } from './observable-model';

export class TextModel extends ObservableModel {
    constructor(text) {
        super('TextModel');
        this._type = text;
        this.makeObservable()
    }

    get type() {
        return this._type;
    }



}