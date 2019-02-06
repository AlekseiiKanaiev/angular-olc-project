import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { User } from '../_models/user.model';
import { Video } from '../_models/video.model';
import { Service } from '../_models/service.model';
import actions from '../_store/actions';
import store from '../_store/store';
import { EmailData } from '../_models/emailData.model';
import { AlertModel } from '../_models/alert.model';

const {SETMAINUSER, SETUSERS, SETVIDEOS, SETSERVICES} = actions;

@Injectable()
export class GetDataService {
    private API_URL = 'http://127.0.0.1:5000';

    obsMainUser: Subject<User> = new Subject<User>();
    obsUsers: Subject<User[]> = new Subject<User[]>();
    obsVideos: Subject<Video[]> = new Subject<Video[]>();
    obsServices: Subject<Service[]> = new Subject<Service[]>();
    // mainUser = this.obsMainUser.asObservable();
    // videos = this.obsVideos.asObservable();

    constructor (private http: HttpClient) {}

    private getMainUser(): Observable<User> {
        return this.http.get<User>(`${this.API_URL}/getMainUser`);
    }

    private getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.API_URL}/getUsers`);
    }

    private getVideos(): Observable<Video[]> {
        return this.http.get<Video[]>(`${this.API_URL}/getVideos`);
    }

    private getServices(): Observable<Service[]> {
        return this.http.get<Service[]>(`${this.API_URL}/getServices`);
    }

    sendEmail(emailData: EmailData): Observable<AlertModel|any> {
        return this.http.post(`${this.API_URL}/sendemail`, emailData);
    }

    setMainUser() {
        this.getMainUser().subscribe(
            (data: User) => {
                this.obsMainUser.next(data);
                store.dispatch({type: SETMAINUSER, data: data});
            }
        );
    }

    setUsers() {
        this.getUsers().subscribe(
            (data: User[]) => {
                this.obsUsers.next(data);
                store.dispatch({type: SETUSERS, data: data});
            }
        );
    }

    setVideos() {
        this.getVideos().subscribe(
            (data: Video[]) => {
                this.obsVideos.next(data);
                store.dispatch({type: SETVIDEOS, data: data});
            }
        );
    }

    setServices() {
        this.getServices().subscribe(
            (data: Service[]) => {
                this.obsServices.next(data);
                store.dispatch({type: SETSERVICES, data: data});
            }
        );
    }
}

