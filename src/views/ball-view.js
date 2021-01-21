export class BallView extends PIXI.Graphics {
  constructor(ballModel) {
    super();
    this.beginFill(ballModel.type);
    this.drawCircle(0, 0, 40);
    this.endFill();
  }

  get name() {
    return 'BallView';
  }

  activate() {
    this.alpha = 0.5;
    return this;
  }

  deactivate() {
    this.alpha = 1;
    return this;
  }
}
