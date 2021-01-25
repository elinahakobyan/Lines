import { lego } from '@armathai/lego';
import { deselectSelectedCellCommand } from './deselect-selected-cell-command';
import { selectCellCommand } from './select-cell-command';

export function checkSelectedCellCommand(selectedCell, cell) {
  lego.command.payload(selectedCell).execute(deselectSelectedCellCommand).payload(cell).execute(selectCellCommand);
}
