import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeaderViewComponent } from '../../../shared/components/header-view/header-view.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@Component({
    selector: 'app-about-view',
    templateUrl: './about-view.component.html',
    styleUrls: ['./about-view.component.scss'],
    standalone: true,
    imports: [HeaderViewComponent, MatCardModule, YouTubePlayerModule]
})
export class AboutViewComponent implements OnInit, AfterViewInit, OnDestroy {
    apiLoaded = false;
    @ViewChild('demoYouTubePlayer') demoYouTubePlayer!: ElementRef<HTMLDivElement>;

    videoWidth: number = 320;
    videoHeight: number = 200;
      
    videos = [
        {
          id: 'PRQCAL_RMVo',
          name: 'Instructional',
        },
        {
          id: 'O0xx5SvjmnU',
          name: 'Angular Conf',
        }
    ];


    constructor(private _changeDetectorRef: ChangeDetectorRef) { }

    ngAfterViewInit(): void {
        
    }

    ngOnInit() {
        if (!this.apiLoaded) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            this.apiLoaded = true;
        }
    }

    

    ngOnDestroy(): void {
       
    }


}
