export class TextView extends PIXI.Text {
  constructor(value) {
    super('Score :' + value, { fontFamily: 'Arial', fontSize: 60, fill: 0xa6b0e8, align: 'center' });
  }
}
