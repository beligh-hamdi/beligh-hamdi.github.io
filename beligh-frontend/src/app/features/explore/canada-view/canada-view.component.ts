import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { VjsPlayerComponent } from '@app/shared/components/vjs-player/vjs-player.component';

@Component({
    selector: 'app-canada-view',
    templateUrl: './canada-view.component.html',
    styleUrls: ['./canada-view.component.scss'],
    standalone: true,
    imports: [MatCardModule, VjsPlayerComponent],
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
    techOrder: ["html5"],
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
