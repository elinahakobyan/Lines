import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { onloadCompleateCommand } from './load-compleate-command';
import { onCellClickCommand } from './on-cell-click-command';
import { onRetryClickCommand } from './on-retry-clilck-command';
import { updateNextBallsCommand } from './update-next-balls-command';
import { updateScoreCommand } from './update-score-command';

export function startupCommand() {
  lego.command
    .on(ViewEvents.Game.LoadComplete, onloadCompleateCommand)
    .on(ViewEvents.BoardView.CellClick, onCellClickCommand)
    .on(ModelEvents.BoardModel.ScoreUpdate, updateScoreCommand)
    .on(ViewEvents.GameView.RetryClick, onRetryClickCommand)
    .on(ModelEvents.BoardModel.NextBallsUpdate, updateNextBallsCommand);
}
