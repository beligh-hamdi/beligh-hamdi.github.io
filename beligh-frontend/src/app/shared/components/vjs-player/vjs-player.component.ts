
import { CommonModule } from '@angular/common';

import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

//@ts-ignore
import *  as videojs from 'video.js/dist/video.js';


@Component({
  selector: 'app-vjs-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vjs-player.component.html',
  styleUrls: ['./vjs-player.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent  implements OnInit, OnDestroy {

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
