import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/_models/video.model';
import { PageChangedEvent } from 'ngx-bootstrap';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() private videos: Video[];

  private curVideos: Video[];
  private totalItems: number;
  private itemsPerPage = 3;
  rotate = true;

  constructor() { }

  ngOnInit() {
    this.videos = this.videos.reverse().filter(el => el.tag === 'oblvideo');
    this.totalItems = this.videos.length;
    this.curVideos = this.videos.slice(0, this.itemsPerPage);
  }

  pageChanged(event: PageChangedEvent): void {
    const start = (event.page - 1) * this.itemsPerPage;
    const end = event.page * this.itemsPerPage;
    this.curVideos = this.videos.slice(start, end);
  }
}
