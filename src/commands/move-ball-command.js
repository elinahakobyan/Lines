import { store } from '../models/store';

export function moveBallCommand(selectedCell, cell, path) {
  store.game.board.moveBall(selectedCell, cell);
}
