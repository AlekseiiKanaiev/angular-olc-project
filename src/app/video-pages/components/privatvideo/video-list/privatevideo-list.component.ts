import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/_models/video.model';
import { PageChangedEvent } from 'ngx-bootstrap';

@Component({
  selector: 'app-privatevideo-list',
  templateUrl: './privatevideo-list.component.html',
  styleUrls: ['./privatevideo-list.component.css']
})
export class PrivateVideoListComponent implements OnInit {
  @Input() private videos: Video[];

  private totalItems: number;
  private curVideos: Video[];
  private itemsPerPage = 3;
  private maxSize = 5;

  constructor() { }

  ngOnInit() {
    this.videos = this.videos.filter(el => el.tag === 'privatvideo').reverse();
    this.totalItems = this.videos.length;
    this.curVideos = this.videos.slice(0, this.itemsPerPage);
  }

  pageChanged(event: PageChangedEvent): void {
    const start = (event.page - 1) * this.itemsPerPage;
    const end = event.page * this.itemsPerPage;
    this.curVideos = this.videos.slice(start, end);
  }

}
