import { store } from '../models/store';

export function generateNewBallsSetCommand() {
  store.game.board.setBallsIntoCells(5);
}
