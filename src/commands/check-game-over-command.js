import { store } from '../models/store';

export function checkGameOverCommand() {
  store.game.board.checkForGameOver();
  store.game.board.gameOver = false;
}
