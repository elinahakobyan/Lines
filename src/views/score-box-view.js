import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { BgView } from './bg-view';

export class ScoreBoxView extends PIXI.Container {
    constructor() {
        super();
        lego.event.on(ModelEvents.ScoreBoxModel.BgUpdate, this._onBgUpdate, this);
    }

    get bgView() {
        return this._bgView;
    }

    _onBgUpdate(bgModel) {
        bgModel ? this._buildBgView(bgModel) : this._destroyBgView();
        lego.event.emit(ViewEvents.ScoreBoxView.CreateBg);
    }

    _buildBgView(bgModel) {
        this.addChild((this._bgView = new BgView(bgModel)));

    }

    _destroyBgView() {
        this._bgView.destroy({ children: true });
    }
}









