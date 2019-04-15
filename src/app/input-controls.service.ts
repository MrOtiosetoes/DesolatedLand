import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputControlsService {

  lastX: -1;
  lastY: -1;
  hasMoved : boolean;
  moveToCallback :  (x: number, y: number) => void;


  touchStart(e) {
    let touch = e.touches[0];
    this.hasMoved = false;
    this.lastX = touch.clientX;
    this.lastY = touch.clientY;
  }
  touchEnd(e) {
    if (!this.hasMoved && this.moveToCallback) this.moveToCallback(this.lastX, this.lastY);
  }
  
  touchMove(e) {
    let touch = e.touches[0];
    this.hasMoved = true;
    this.lastX = touch.clientX;
    this.lastY = touch.clientY;
  }

  //#region keyboard
  up = false;
  down = false;
  left = false;
  right = false;

  handleKeyDownEvent(event: KeyboardEvent) {
    console.log("down: ", event.key);
    if (event.key == "ArrowUp") this.up = this.up ? false : true;
    if (event.key == "ArrowDown") this.down = this.down ? false : true;
    if (event.key == "ArrowLeft") this.left = this.left ? false : true;
    if (event.key == "ArrowRight") this.right = this.right ? false : true;
  }
  handleKeyUpEvent(event: KeyboardEvent) {
    console.log("up: ", event.key);
    if (event.key == "ArrowUp") this.up = false;
    if (event.key == "ArrowDown") this.down = false;
    if (event.key == "ArrowLeft") this.left = false;
    if (event.key == "ArrowRight") this.right = false;
  }
  //#endregion
  
}
