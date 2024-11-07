import { Display } from "./Display.js";
import { Game } from "./Game.js";
const game = new Game();
const display = new Display(50, 50, 10, 200);
display.play(game);
