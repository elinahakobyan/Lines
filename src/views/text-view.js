export class TextView extends PIXI.Text {
  constructor(value) {
    super('Score :' + value, { fontFamily: 'Arial', fontSize: 40, fill: 0xff1010, align: 'center' });
  }
}
