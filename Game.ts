import { Display } from "./Display.js";
import { Snake } from "./Snake.js";
import { Apple } from "./Apple.js";
import { Color } from "./Color.js";
import { Point } from "./Point.js";

export class Game{
    private score: number;
    private gameOver: boolean;
    private snake: Snake;
    private apples: Apple[];

    constructor() {
        this.score = 0;
        this.gameOver = false;
        this.snake = new Snake(0, 0);
        this.apples = [];
        this.generateApples(50);
    }
    
    private checkSnakePosition(): void {
        if (this.snake.getPosition()[0] == -1 || this.snake.getPosition()[0] == 51 
            || this.snake.getPosition()[1] == -1 || this.snake.getPosition()[1] == 51) {
            this.gameOver = true;
        }
    }

    public getScore():number{
        return this.score;
    }

    public showSnake(display: Display): void {
        this.snake.getButtonClick();
        // this.snake.getDirection();
        this.snake.changeDirection();
        this.snake.drawSnake(display, Color.RED);
    }

    public generateApples(quantity: number): void {
        for (let i = 1; i < quantity; i++) {
            this.apples.push(new Apple(Math.floor(Math.random() * quantity), Math.floor(Math.random() * quantity), Color.GREEN));
        }
    }

    public showApples(display: Display): void {
        for (let apple of this.apples) {
            apple.drawApple(display);
        }
    }

    public eatApple(): void {
        for (let apple of this.apples) {
            let snakePosX: number = this.snake.getPosition()[0];
            let snakePosY: number = this.snake.getPosition()[1];

            if (apple.getX() == snakePosX && apple.getY() == snakePosY) {
                this.apples = this.apples.filter(e => !(e.getX() == snakePosX && e.getY() == snakePosY))

                this.snake.updateBody(new Point(snakePosX, snakePosY));

                
                this.score++;
            }
        }
        // console.log('list', this.snake.getBody());
    }

    public showGameOver(): void {
        const popup = document.getElementById("over");

        if (this.gameOver) {
            popup?.classList.add("active");
        }
    }

    public play(display:Display):boolean{
        display.refreshScore();
        
        this.showApples(display);
        this.showSnake(display);

        this.eatApple();
        this.checkSnakePosition();
        this.showGameOver();
        return this.gameOver;
    }
}