import { Point } from "./Point.js";
export class Snake extends Point {
    constructor(x, y) {
        super(x, y);
        this.body = [new Point(x - 1, y)];
        this.direction = 'right';
    }
    getButtonClick() {
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
        });
    }
    getBody() {
        return this.body;
    }
    getPosition() {
        return [this.x, this.y];
    }
    growHead() {
        // save (x,y) in body
        // update x, y depending on direction
        this.body.push(new Point(this.x, this.y));
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
    cropTail() {
        // remove last body part
        this.body.shift();
    }
    move(display, color) {
        this.growHead();
        this.cropTail();
        this.drawSnake(display, color);
    }
    drawSnake(display, color) {
        display.drawRectangle(this.x, this.y, color);
        if (this.body.length > 0) {
            for (let i = this.body.length - 1; i > 0; i--) {
                display.drawRectangle(this.body[i].getX(), this.body[i].getY(), color);
            }
        }
    }
    updateBody(part) {
        this.body.unshift(part);
    }
}
