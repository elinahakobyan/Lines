import { lego } from '@armathai/lego';
import { initializeGameModelCommand } from './initialize-game-model-command';
import { initializeScoreBoxModelCommand } from './initialize-score-box-model-command';


export function onloadCompleateCommand() {
  lego.command.execute(initializeGameModelCommand);
  lego.command.execute(initializeScoreBoxModelCommand)
}
