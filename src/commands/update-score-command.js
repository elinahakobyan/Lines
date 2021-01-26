import { store } from '../models/store';

export function updateScoreCommand(value) {
  store.game.scoreBox.deleteText();
  store.game.scoreBox.addText(value);
}
