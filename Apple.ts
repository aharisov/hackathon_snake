import { Color } from "./Color.js";
import { Display } from "./Display.js";
import { Point } from "./Point.js";

export class Apple extends Point {
    protected x: number;
    protected y: number;
    protected color: Color;

    constructor (x: number, y: number, color: Color) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.color = color;
    }

    public drawApple(display: Display): void {
        display.drawCircle(this.x, this.y, this.color);
    }
}