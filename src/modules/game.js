class Game {
  start() {
    console.log("game started");
  }
}
class GameSavingData {}
function readGameSaving() {}
function writeGameSaving() {}

const defaultGame = new Game();
export default defaultGame;

export class GameSavingData {}
export function readGameSaving() {}
export function writeGameSaving() {}
