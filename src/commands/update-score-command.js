import { store } from "../models/store";

export function updateScoreCommand(value) {
    store.scoreBox.bg.deleteText()

    store.scoreBox.bg.addText(value)

}