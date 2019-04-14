import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputControlsService {
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
  
}
