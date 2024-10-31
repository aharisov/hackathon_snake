import { Point } from "./Point.js";
export class Snake extends Point {
    constructor(x, y) {
        super(x, y);
        this.body = [new Point(x, y)];
        this.dirX = 'r';
        this.dirY = '';
    }
    getButtonClick() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 's') {
                this.dirY = 'd';
                this.dirX = '';
            }
            if (e.key == 'z') {
                this.dirY = 'u';
                this.dirX = '';
            }
            if (e.key == 'd') {
                this.dirX = 'r';
                this.dirY = '';
            }
            if (e.key == 'q') {
                this.dirX = 'l';
                this.dirY = '';
            }
        });
    }
    // public getDirection(): string[] {
    //     return [this.dirX, this.dirY];
    // }
    changeDirection() {
        switch (this.dirX) {
            case 'r':
                this.x++;
                break;
            case 'l':
                this.x--;
                break;
        }
        switch (this.dirY) {
            case 'u':
                this.y--;
                break;
            case 'd':
                this.y++;
                break;
        }
    }
    getBody() {
        return this.body;
    }
    getPosition() {
        return [this.x, this.y];
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    drawSnake(display, color) {
        if (this.dirX == 'r' && this.dirY == '') {
            for (let i = 0; i < this.body.length; i++) {
                display.drawRectangle(this.x - i, this.y, color);
            }
        }
        if (this.dirX == 'l' && this.dirY == '') {
            for (let i = this.body.length - 1; i > -1; i--) {
                display.drawRectangle(this.x + i, this.y, color);
            }
        }
        if (this.dirX == '' && (this.dirY == 'u' || this.dirY == 'd')) {
            for (let i = 0; i < this.body.length; i++) {
                display.drawRectangle(this.x - i, this.y + 1, color);
            }
        }
        console.log('head pos', this.x, this.y);
    }
    updateBody(part) {
        this.body.push(part);
    }
}
