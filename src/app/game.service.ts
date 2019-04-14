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

  constructor() {
    this.level = new Array();
    for (var y = 0; y < this.height; y++) {
      let row = new Array();
      for (var x = 0; x < this.height; x++) {
        row.push(0);
      }
      this.level.push(row);
    }
    console.log(this.level);
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
