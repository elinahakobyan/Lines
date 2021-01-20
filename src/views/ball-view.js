export class BallView extends PIXI.Container {
  constructor(ballModel) {
    super();
    this._buildBall(ballModel);
  }

  get name() {
    return 'BallView';
  }

  _buildBall(ballModel) {
    const gr = new PIXI.Graphics();
    gr.beginFill(ballModel.type);
    gr.drawCircle(0, 0, 70, 70);
    gr.endFill();
    this.addChild(gr);
  }
}
