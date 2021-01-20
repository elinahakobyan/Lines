import { EntryCellsCount } from '../constants';
import { store } from '../models/store';

export function EmptyCells(count) {
  const emptyCells = sampleSize(
    store.game.bord.cells.filter((cell) => !cell.ball),
    count
  );
}
