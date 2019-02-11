import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/_services/getData.service';
import { Service } from 'src/app/_models/service.model';
import store from 'src/app/_store/store';
import { AlertModel } from 'src/app/_models/alert.model';
import { EmailData } from 'src/app/_models/emailData.model';

@Component({
  selector: 'app-send-email-form',
  templateUrl: './send-email-form.component.html',
  styleUrls: ['./send-email-form.component.css']
})
export class SendEmailFormComponent implements OnInit {
  @Input() private isUkr: boolean;
  @Input() private lang: string;
  private services: Service[];
  private servType = 'service';
  private alert: AlertModel;

  emailForm: FormGroup = new FormGroup({
    'name':       new FormControl('',
                    Validators.required
                  ),
    'email':  new FormControl('',
                    [
                      Validators.required,
                      Validators.pattern('[a-zA-Z_0-9.]+@[a-zA-Z_0-9.]+?\.[a-zA-Z]{2,3}')
                    ]
                  ),
    'phone':  new FormControl('',
                    [
                      Validators.required,
                      Validators.pattern('[0-9]{10}')
                    ]
                  ),
    'select':  new FormControl('',
                    [
                      Validators.required,
                    ]
                  ),
    'form_msg':  new FormControl('')
  });

  constructor(private getDataServ: GetDataService) { }

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
      console.log(this.services);
    }
  }

  submit() {
    this.getDataServ.sendEmail(this.emailForm.value).subscribe(
      (data: AlertModel) => {
        console.log(data);
        this.alert = data;
      },
      (err) => {
        console.log(err);
        this.alert = {
          msg_ukr: 'Помилка сервера',
          msg_rus: 'Ошибка сервера',
          type: 'danger'
        };
      }
    );
  }
}
