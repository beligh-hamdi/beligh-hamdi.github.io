import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

//@ts-ignore
import *  as videojs from 'video.js/dist/video.js';
// import *  as videojsYoutube from 'videojs-youtube/dist/Youtube.js';
//declare module 'videojs-youtube/dist/Youtube.js'

@Component({ 
    selector: 'vjs-player-lib',
    template: `
    <video #target class="video-js vjs-fluid">
      <ng-content></ng-content>
      <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
      </p>
    </video>
  `,
    styles: [`
      @import 'video.js/dist/video-js.min.css';
  `
    ],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
})
export class VjsPlayerLibComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target!: ElementRef;

  // See options: https://videojs.com/guides/options
  @Input() options!: any;

  player!: any;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady');
    });
  }

  ngOnDestroy() {

  }
}
