import { Snake } from "./Snake.js";
import { Apple } from "./Apple.js";
import { Color } from "./Color.js";
import { Point } from "./Point.js";
export class Game {
    constructor() {
        this.score = 0;
        this.gameOver = false;
        this.snake = new Snake(0, 0);
        this.apples = [];
        this.generateApples(50);
    }
    checkCollision() {
        if (this.snake.getPosition()[0] == -1 || this.snake.getPosition()[0] == 51
            || this.snake.getPosition()[1] == -1 || this.snake.getPosition()[1] == 51) {
            this.gameOver = true;
        }
        for (let part of this.snake.getBody()) {
            console.log('part', part, this.snake.getPosition());
        }
    }
    getScore() {
        return this.score;
    }
    showSnake(display) {
        this.snake.getButtonClick();
        this.snake.move(display, Color.RED);
    }
    generateApples(quantity) {
        for (let i = 1; i < quantity; i++) {
            this.apples.push(new Apple(Math.floor(Math.random() * quantity), Math.floor(Math.random() * quantity), Color.GREEN));
        }
    }
    showApples(display) {
        for (let apple of this.apples) {
            apple.drawApple(display);
        }
    }
    checkAppleEat() {
        for (let apple of this.apples) {
            let snakePosX = this.snake.getPosition()[0];
            let snakePosY = this.snake.getPosition()[1];
            if (apple.getX() == snakePosX && apple.getY() == snakePosY) {
                this.apples = this.apples.filter(e => !(e.getX() == snakePosX && e.getY() == snakePosY));
                this.snake.updateBody(new Point(snakePosX, snakePosY));
                this.score++;
            }
        }
    }
    showGameOver() {
        const popup = document.getElementById("over");
        if (this.gameOver) {
            popup === null || popup === void 0 ? void 0 : popup.classList.add("active");
        }
    }
    play(display) {
        display.refreshScore();
        this.showApples(display);
        this.showSnake(display);
        this.checkAppleEat();
        this.checkCollision();
        this.showGameOver();
        return this.gameOver;
    }
}
