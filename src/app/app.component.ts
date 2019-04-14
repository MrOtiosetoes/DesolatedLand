import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { InputControlsService } from './input-controls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'AngularGame';
  @ViewChild('gameCanvas') gameCanvas: ElementRef;
  @ViewChild('audio') bgAudio: ElementRef;
  public context: CanvasRenderingContext2D;
  x = 0;
  y = 0;
  stepSize = 2;
  image;
  tileSize = 32;
  width = 20;
  height = 20;
  input: InputControlsService;

  constructor(input: InputControlsService) {
    this.input = input;
  }

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.gameCanvas.nativeElement).getContext('2d');
    this.image = new Image();
    this.image.src = '/assets/tileset.png';
    this.gameCanvas.nativeElement.width = this.tileSize * this.width;
    this.gameCanvas.nativeElement.height = this.tileSize * this.height;

    this.playMusic();
    setInterval(() => {
      this.handleInput();
      this.drawCanvas();
    }, 50);
  }

  private playMusic() {

    let audio = new Audio();
    audio.src = "/assets/audio/tfh.mp3";
    audio.load();
    audio.play().then(() => { console.log("ok") }).catch((e) => {
      console.log("err", e);
    }
    );
  }

  private handleInput() {
    if (this.input.up)
      this.y -= this.stepSize;
    if (this.input.down)
      this.y += this.stepSize;
    if (this.input.left)
      this.x -= this.stepSize;
    if (this.input.right)
      this.x += this.stepSize;
  }

  drawCanvas() {
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {

        this.context.drawImage(this.image, 0, 0, this.tileSize, this.tileSize, x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
      }

    }
    this.context.fillStyle = 'rgb(255, 165, 0)';
    this.context.fillRect(this.x, this.y, this.tileSize, this.tileSize);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDownEvent(event: KeyboardEvent) {
    this.input.handleKeyDownEvent(event);
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUpEvent(event: KeyboardEvent) {
    this.input.handleKeyUpEvent(event);
  }
}
