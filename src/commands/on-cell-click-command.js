import { lego } from '@armathai/lego';
import { cellEmptyGuard } from '../guards/cell-empty-guard';
import { selectedCellGuard } from '../guards/selected-cell-guard';
import { store } from '../models/store';
import { deselectSelectedCellCommand } from './deselect-selected-cell-command';
import { moveBall, moveBallCommand } from './move-ball-command';
import { selectCellCommand } from './select-cell-command';
import { checkMatchCommand } from './check-match-command';
import { movmentCommand } from './movment-command';
import { checkGameOverCommand } from './check-game-over-command';
import { setNextBallsIntoCellsCommand } from './set-next-balls-into-cells-command';

export function onCellClickCommand(cellUuid) {
  const cell = store.game.board.getCellByUuid(cellUuid);
  const selectedCell = store.game.board.selectedCell;
  if (cell.isEmpty) {
    if (selectedCell) {
      lego.command.payload(selectedCell).execute(deselectSelectedCellCommand);
      lego.command.payload(selectedCell, cell).execute(moveBallCommand);
    }
  } else {
    if (selectedCell) {
      lego.command.payload(selectedCell).execute(deselectSelectedCellCommand);
      lego.command.payload(cell).execute(selectCellCommand);
    } else {
      lego.command.payload(cell).execute(selectCellCommand);
    }
  }
  // lego.command.payload(cell, selectedCell).guard(cellEmptyGuard, selectedCellGuard).execute(movmentCommand);

  // lego.command.payload(selectedCell, cell).guard(lego.not(cellEmptyGuard)).execute(checkSelectedCellCommand);
  // lego.command.payload(selectedCell, cell).guard(lego.not(checkSelectedCellCommand)).execute(selectCellCommand);
}
