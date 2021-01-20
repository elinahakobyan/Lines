import { lego } from '@armathai/lego';
import { initializeGameModelCommand } from './initialize-game-model-command';

export function onloadCompleateCommand() {
  lego.command.execute(initializeGameModelCommand);
}
