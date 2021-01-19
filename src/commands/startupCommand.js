import { lego } from '@armathai/lego';
import { ViewEvents } from '../events/view-events';
import { onloadCompleateCommand } from './load-compleate-command';

export function startupCommand() {
  lego.command.on(ViewEvents.Game.LoadComplete, onloadCompleateCommand);
}
