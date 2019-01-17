import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/_services/loader.service';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css'],
  animations: [
    trigger('fadeOut', [
      state('show', style({opacity: 1 })),
      state('hide', style({opacity: 0, visibility: 'hidden'})),
      transition('show=>hide', [
        animate('0.6s ease'),
      ])
    ])
  ]
})
export class PreloaderComponent implements OnInit {
  show = true;

  constructor(private loaderServ: LoaderService) { }

  ngOnInit() {
    this.loaderServ.loaderState.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      (state: boolean) => {
        this.show = state;
      }
    );
  }

}
