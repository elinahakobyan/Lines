import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { setNextBallsIntoCellsCommand } from './set-next-balls-into-cells-command';

export function moveBallCommand(selectedCell, cell, path) {
  const balls = store.game.nextBalls.balls;

  const promise = new Promise((resolve) => {
    store.game.board.moveBall(selectedCell, cell, resolve);
  }).then(() => {
    lego.command.payload(balls).execute(setNextBallsIntoCellsCommand);
  });
}
