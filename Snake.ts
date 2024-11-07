import { Color } from "./Color.js";
import { Display } from "./Display.js";
import { Point } from "./Point.js";

export class Snake extends Point {
    private body: Point[];
    private direction: string;

    constructor (x: number, y: number) {
        super(x, y);
        this.body = [new Point(x-1, y)];
        this.direction = 'right';
    }

    public getButtonClick() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 's') {
                this.direction = 'down';
            }

            if (e.key == 'z') {
                this.direction = 'up';
            }

            if (e.key == 'd') {
                this.direction = 'right';
            }

            if (e.key == 'q') {
                this.direction = 'left';
            }
        })
    }

    public getBody(): Point[] {
        return this.body;
    }

    public getPosition(): number[] {
        return [this.x, this.y];
    }

    public growHead(): void {
        // save (x,y) in body
        // update x, y depending on direction
        this.body.push(new Point(this.x, this.y))

        switch (this.direction) {
            case 'up':
                this.y--;
                break;
            case 'down':
                this.y++;
                break;
            case 'right':
                this.x++;
                break;
            case 'left':
                this.x--;
                break;
        }
    }   

    public cropTail() {
        // remove last body part
        this.body.shift();
    }

    public move(display: Display, color: Color) {
        this.growHead();
        this.cropTail();

        this.drawSnake(display, color);
    }

    public drawSnake(display: Display, color: Color): void {
        display.drawRectangle(this.x, this.y, color);

        if (this.body.length > 0) {
            for (let i = this.body.length - 1; i > 0; i--) {
                display.drawRectangle(this.body[i].getX(), this.body[i].getY(), color);
            }
        }
    }

    public updateBody(part: Point): void {
        this.body.unshift(part);
    }
}