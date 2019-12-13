import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Service } from 'src/app/_models/service.model';
import store from 'src/app/_store/store';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-pub-info',
  templateUrl: './pub-info.component.html',
  styleUrls: ['./pub-info.component.css'],
  animations: [
    trigger('fadeOut', [
      state('show', style({})),
      state('hide', style({opacity: 0, visibility: 'hidden'})),
      transition('show<=>hide', [
        animate('0.6s ease'),
      ])
    ]),
    trigger('infoList', [
      state('show', style({height: '*'})),
      state('hide', style({height: 0, opacity: 0, display: 'none'})),
      transition('show<=>hide', [
        animate('0.5s ease'),
      ])
    ])
  ]
})
export class PubInfoComponent implements OnInit {
  @Input() isUkr: boolean;

  services: Service[];
  private servType = 'document';
  xIcon = faTimesCircle;
  isPressed = false;
  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.getServices();
    this.filterServices(this.servType);
  }

  private getServices() {
    this.services = store.getState().services;
    store.subscribe(
      () => {
        this.services = store.getState().services;
        this.filterServices(this.servType);
      }
    );
  }

  private filterServices(type: string) {
    if (this.services) {
      this.services = this.services.filter(el => el.type === type);
    }
  }

  onClick() {
    this.isPressed = !this.isPressed;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
