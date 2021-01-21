import { lego } from '@armathai/lego';
import { ViewEvents } from '../events/view-events';
import { onloadCompleateCommand } from './load-compleate-command';
import { onCellClickCommand } from './on-cell-click-command';

export function startupCommand() {
  lego.command
    .on(ViewEvents.Game.LoadComplete, onloadCompleateCommand)
    .on(ViewEvents.BoardView.CellClick, onCellClickCommand);
}
