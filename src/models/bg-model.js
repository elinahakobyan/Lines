import { ObservableModel } from "./observable-model";
import { TextModel } from "./text-model";


export class BgModel extends ObservableModel {
    constructor() {
        super('BgModel');
        this._text = null;
        this.makeObservable()
    }

    get text() {
        return this._text;
    }

    addText(value) {
        if (value === undefined) {
            this._text = new TextModel(0);
        } else {
            this._text = new TextModel(value);

        }
        this._text.initialize();
    }

    deleteText() {
        this._text = null;
    }

    initialize() {
        //
    }
}