import { store } from '../models/store';

export function updateNextBallsCommand() {
  store.game.nextBalls.updateNextBalls();
}
