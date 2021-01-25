import { store } from '../models/store';

export function moveBallCommand(selectedCell, cell) {
  store.game.board.moveBall(selectedCell, cell);
}
