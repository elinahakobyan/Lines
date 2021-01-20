import { Game } from './game';
import * as PIXI from 'pixi.js';
import { legologger } from '@armathai/lego-logger';
import { lego } from '@armathai/lego';
import { startupCommand } from './commands/startupCommand';

window.PIXI = PIXI;

legologger.start(lego);
lego.command.execute(startupCommand);

new Game();
