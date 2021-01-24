import { lego } from "@armathai/lego";
import { ModelEvents } from "../events/model-events";
import { ObservableModel } from "./observable-model";
import { BgModel } from './bg-model';


export class ScoreBoxModel extends ObservableModel {
    constructor() {
        super('ScoreBoxModel');
        this._bg = null;
        this.makeObservable()
        lego.event.on()
    }

    get bg() {
        return this._bg;
    }

    initialize() {
        this._bg = new BgModel()
        this._bg.addText();
    }

}