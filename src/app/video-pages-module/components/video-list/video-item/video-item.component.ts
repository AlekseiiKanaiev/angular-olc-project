import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/_models/video.model';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input() video: Video;

  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${this.video.video_id}`);
  }

}
