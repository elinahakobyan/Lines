import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { initializeGameModelCommand } from './initialize-game-model-command';

export function retryGameCommand() {
  store.destroyGame();
  lego.command.execute(initializeGameModelCommand);
}
