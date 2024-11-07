import { Color } from "./Color.js";
import { Display } from "./Display.js";
import { Point } from "./Point.js";

export class Snake extends Point {
    private body: Point[];
    private dirX: string;
    private dirY: string;

    constructor (x: number, y: number) {
        super(x, y);
        this.body = [new Point(x, y)];
        this.dirX = 'r';
        this.dirY = '';
    }

    public getButtonClick() {
        window.addEventListener('keydown', (e) => {
            
            if (e.key == 's' && this.dirX == 'r') {
                this.dirY = 'd';
                this.dirX = 'rd';
            }

            if (e.key == 's' && this.dirX == 'l') {
                this.dirY = 'd';
                this.dirX = 'ld';
            }

            if (e.key == 'z' && this.dirX == 'r') {
                this.dirY = 'u';
                this.dirX = 'ru';
            }

            if (e.key == 'z' && this.dirX == 'l') {
                this.dirY = 'u';
                this.dirX = 'lu';
            }

            if (e.key == 'd') {
                this.dirX = 'r';
                this.dirY = '';
            }

            if (e.key == 'q') {
                this.dirX = 'l';
                this.dirY = '';
            }
        })
    }

    // public getDirection(): string[] {
    //     return [this.dirX, this.dirY];
    // }

    public changeDirection(): void {
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

    public getBody(): Point[] {
        return this.body;
    }

    public getPosition(): number[] {
        return [this.x, this.y];
    }
    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public drawSnake(display: Display, color: Color): void {
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
        if (this.dirX == 'rd' && this.dirY == 'd') {
            for (let i = 0; i < this.body.length; i++) {
                display.drawRectangle(this.x, this.y - i, color);
            }
        }
        if (this.dirX == 'ld' && this.dirY == 'd') {
            for (let i = this.body.length - 1; i > -1; i--) {
                display.drawRectangle(this.x, this.y - i, color);
            }
        }
        if (this.dirX == 'ru' && this.dirY == 'u') {
            for (let i = 0; i < this.body.length; i++) {
                display.drawRectangle(this.x, this.y + i, color);
            }
        }
        if (this.dirX == 'lu' && this.dirY == 'u') {
            for (let i = this.body.length - 1; i > -1; i--) {
                display.drawRectangle(this.x, this.y + i, color);
            }
        }

        // console.log('dir', this.dirX, this.dirY);
        // console.log('x,y', this.x, this.y);
    }

    public updateBody(part: Point): void {
        this.body.unshift(part);
    }
}