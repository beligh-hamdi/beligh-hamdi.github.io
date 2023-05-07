import { Component } from '@angular/core';
import { VjsPlayerLibComponent } from '../../../../../projects/vjs-player-lib/src/lib/vjs-player-lib.component';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-canada-view',
    templateUrl: './canada-view.component.html',
    styleUrls: ['./canada-view.component.scss'],
    standalone: true,
    imports: [MatCardModule, VjsPlayerLibComponent],
})
export class CanadaViewComponent {

  optionsBase = {
    responsive: true,
    crossorigin: 'anonymous',
    preload: 'metadata',
    controls: true,
    autoplay: false,
    overrideNative: true,
    playsinline: true,
    techOrder: ["html5", "youtube"],
    html5: {
      nativeVideoTracks: true,
      nativeAudioTracks: true,
      nativeTextTracks: true,
      hls: {
        withCredentials: false,
        overrideNative: true,
        debug: false
      }
    }
  }
  
  options = Object.assign({}, this.optionsBase, {
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/2560px-Flag_of_Canada.svg.png',
    sources: [
      { src: 'https://www.youtube.com/watch?v=xjS6SftYQaQ', type: 'video/youtube' }
    ]
  });


  options1 = Object.assign({}, this.optionsBase, {
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/2560px-Flag_of_Canada.svg.png',
    sources: [
      { src: 'assets/data/media/O_Canada_French_lyrics_1918.mp4', type: 'video/mp4' },
      { src: 'assets/data/media/O_Canada_French_lyrics_1918.ogg', type: 'audio/ogg' }
    ]
  });


  ngOnInit() {
      // United_States_Navy_Band_-_O_Canada.ogg ocanada-fr.vtt
  }


}
