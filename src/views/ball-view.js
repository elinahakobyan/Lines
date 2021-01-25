export class BallView extends PIXI.Graphics {
  constructor(type) {
    super();
    this.beginFill(type);
    this.drawCircle(0, 0, 40);
    this.endFill();
  }

  get name() {
    return 'BallView';
  }

  activate() {
    this.scale.set(0.65);
    return this;
  }

  deactivate() {
    this.scale.set(1);
    return this;
  }
}
