import { lego } from '@armathai/lego';
import { store } from '../models/store';

export function onloadCompleateCommand() {
  lego.command.execute(initializeGameModelCommand);
}

export function initializeGameModelCommand() {
  store.initializeGameModel();
}
