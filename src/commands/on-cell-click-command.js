import { lego } from '@armathai/lego';
import { cellEmptyGuard } from '../guards/cell-empty-guard';
import { selectedCellGuard } from '../guards/selected-cell-guard';
import { store } from '../models/store';
import { deselectSelectedCellCommand } from './deselect-selected-cell-command';
import { generateNewBallsSetCommand } from './generate-new-balls-set-command';
import { selectCellCommand } from './select-cell-command';

export function onCellClickCommand(cellUuid) {
  const cell = store.game.board.getCellByUuid(cellUuid);
  const selectedCell = store.game.board.selectedCell;
  if (cell.isEmpty) {
    if (selectedCell) {
      const path = store.game.board.getPath(selectedCell, cell);
      lego.command.payload(selectedCell).execute(deselectSelectedCellCommand);
      const ball = selectedCell.removeBall();
      cell.addBall(ball.type);
      store.game.board.checkMath();
      lego.command.execute(generateNewBallsSetCommand);
    }
  } else {
    if (selectedCell) {
      lego.command.payload(selectedCell).execute(deselectSelectedCellCommand);
      lego.command.payload(cell).execute(selectCellCommand);
    } else {
      lego.command.payload(cell).execute(selectCellCommand);
    }
  }
}

// lego.command
//   .payload(cell, selectedCell)
//   .guard(cellEmptyGuard, selectedCellGuard)
//   .execute(deselectSelectedCellCommand);
// console.warn(selectedCell);
// const ball = selectedCell.removeBall();
// cell.addBall(ball.type);
// lego.command
//   .execute(generateNewBallsSetCommand)
//   .guard(lego.not(cellEmptyGuard))
//   .guard(selectedCellGuard)

//   .payload(selectedCell)
//   .execute(deselectSelectedCellCommand)
//   .payload(cell)
//   .execute(selectCellCommand)
//   .guard(lego.not(selectedCellGuard))
//   .payload(cell)
//   .execute(selectCellCommand);
