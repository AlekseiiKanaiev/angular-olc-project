import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/_models/video.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-privatevideo-item',
  templateUrl: './privatevideo-item.component.html',
  styleUrls: ['./privatevideo-item.component.css']
})
export class PrivateVideoItemComponent implements OnInit {
  @Input() private video: Video;

  private safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${this.video.video_id}`);
  }

}
