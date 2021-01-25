import { lego } from '@armathai/lego';
import { checkMatchCommand } from './check-match-command';
import { deselectSelectedCellCommand } from './deselect-selected-cell-command';
import { moveBallCommand } from './move-ball-command';

export function movmentCommand(cell, selectedCell) {
  lego.command
    .payload(cell, selectedCell)
    .execute(deselectSelectedCellCommand)
    .execute(moveBallCommand)
    .execute(checkMatchCommand);
}
