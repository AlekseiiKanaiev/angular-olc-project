import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/_models/video.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-last-video',
  templateUrl: './last-video.component.html',
  styleUrls: ['./last-video.component.css']
})
export class LastVideoComponent implements OnInit {
  @Input() private isUkr: boolean;
  @Input() private video: Video;

  private safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log(this.video);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${this.video.video_id}`);
  }
}
