import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/_models/video.model';
import { PageChangedEvent } from 'ngx-bootstrap';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];

  curVideos: Video[];
  totalItems: number;
  itemsPerPage = 3;
  maxSize = 5;

  constructor() { }

  ngOnInit() {
    this.videos = this.videos.reverse();
    this.totalItems = this.videos.length;
    this.curVideos = this.videos.slice(0, this.itemsPerPage);
  }

  pageChanged(event: PageChangedEvent): void {
    const start = (event.page - 1) * this.itemsPerPage;
    const end = event.page * this.itemsPerPage;
    this.curVideos = this.videos.slice(start, end);
  }

}
