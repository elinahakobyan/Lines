import { store } from '../models/store';

export function setNextBallsIntoCellsCommand(balls) {
  store.game.board.setNextBallsIntoCells(balls);
}
