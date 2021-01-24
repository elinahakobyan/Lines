import { store } from "../models/store";

export function checkMatchCommand() {

    store.game.board.checkMatch()
}
