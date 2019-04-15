import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  level: number[][];
  width = 20;
  height = 20;

  x = 10;
  y = 10;
  path : Function[];

  constructor() {
    this.level = new Array();
    for (var y = 0; y < this.height; y++) {
      let row = new Array();
      for (var x = 0; x < this.height; x++) {
        row.push(0);
      }
      this.level.push(row);
    }
    setInterval(() => {
      if (this.path && this.path.length > 0) {
        this.path.pop().bind(this)();
      }
    }, 100);
  }

  goToPath(destX: number, destY: number, currentX: number, currentY: number, stack: Function[]): Function[] {
    if (destX == currentX && destY == currentY) {
      return stack;
    }
    let dx = destX - currentX;
    let dy = destY - currentY;
    if (Math.abs(dx) >= Math.abs(dy)) {
      if (dx < 0) {
        currentX--;
        stack.push(this.moveLeft);
      } else {
        currentX++;
        stack.push(this.moveRight);
      }
    }
    else {
      if (dy < 0) {
        currentY--;
        stack.push(this.moveUp);
      } else {
        currentY++;
        stack.push(this.moveDown);
      };
    }
    return this.goToPath(destX, destY, currentX, currentY, stack);
  }

  goTo(x: number, y: number) {
    this.path = this.goToPath(x, y, this.x, this.y, []);
  }

  moveUp() {
    if (this.y == 0) return;
    this.y -= 1;
  }

  moveDown() {
    if (this.y == this.height) return;
    this.y += 1;
  }

  moveLeft() {
    if (this.x == 0) return;
    this.x -= 1;
  }

  moveRight() {
    if (this.x == this.width) return;
    this.x += 1;
  }
}
