import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from 'src/app/_models/video.model';

@Component({
  selector: 'app-oblvideo-item',
  templateUrl: './oblvideo-item.component.html',
  styleUrls: ['./oblvideo-item.component.css']
})
export class OblVideoItemComponent implements OnInit {
  @Input() private video: Video;

  private safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${this.video.video_id}`);
  }

}
