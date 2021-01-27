import { lego } from '@armathai/lego';
import { retryGameCommand } from './retry-game-command';

export function onRetryClickCommand() {
  lego.command.execute(retryGameCommand);
}
