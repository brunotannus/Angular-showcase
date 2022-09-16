import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-videoview',
  templateUrl: './videoview.component.html',
  styleUrls: ['./videoview.component.css'],
  template: '<youtube-player videoId="dQw4w9WgXcQ"></youtube-player>',
})
export class VideoviewComponent implements OnInit, OnChanges, AfterViewInit {
  @Input()

  url: string = '';
  videoId: string = '';

  height: number = 0;
  width: number = 0;

  constructor() {}

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    
  }

  ngAfterViewInit(): void {}

  ngOnChanges(): void {
    this.videoId = this.url.split('v=')[1].split('&')[0];
    this.height = window.innerHeight/2;
    this.width = window.innerWidth/2;
    console.log("changes");
  }


}
