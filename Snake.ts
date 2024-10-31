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
        if (this.dirX == '' && (this.dirY == 'u' || this.dirY == 'd')) {
            for (let i = 0; i < this.body.length; i++) {
                display.drawRectangle(this.x - i, this.y+1, color);
            }
        }

        console.log('head pos', this.x, this.y);
    }

    public updateBody(part: Point): void {
        this.body.push(part);
    }
}