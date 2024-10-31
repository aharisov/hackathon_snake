import { Point } from "./Point.js";
export class Apple extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.color = color;
    }
    drawApple(display) {
        display.drawCircle(this.x, this.y, this.color);
    }
}
