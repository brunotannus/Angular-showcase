import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-videoview',
  templateUrl: './videoview.component.html',
  styleUrls: ['./videoview.component.css'],
})
export class VideoviewComponent implements OnInit, OnChanges, AfterViewInit {
  @Input()
  public url: string = 'www.youtube.com/embed/fyYteLB6vbM';

  constructor(private embedService: EmbedVideoService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['url']) {
      this.url = changes['url'].currentValue.replace('watch?v=', 'embed/');
      console.log(this.url);
    }
  }
}
