import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './app.component.html',
})
export class App implements AfterViewInit {
  faPlay = faPlay;
  faPause = faPause;

  isPlaying = false;
  showOverlay = true; 

  @ViewChild('player') playerRef!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit() {
    const player = this.playerRef.nativeElement;
    player.loop = true;  
    player.volume = 0;    
  }

  toggleMusic() {
    const player = this.playerRef.nativeElement;

    if (!this.isPlaying) {
      player.volume = 1; 
      player.play();
      this.showOverlay = false; 
    } else {
      player.pause();
    }

    this.isPlaying = !this.isPlaying;
  }
}
