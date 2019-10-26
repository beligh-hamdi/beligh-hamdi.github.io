import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  skills: string[];
  loading = true;

  panelOpenState = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.skills = this.activatedRoute.snapshot.data.skills;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
