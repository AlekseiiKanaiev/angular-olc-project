import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { User } from '../_models/user.model';
import { Video } from '../_models/video.model';
import actions from '../_store/actions';
import store from '../_store/store';

const {SETMAINUSER, SETUSERS, SETVIDEOS} = actions;

@Injectable()
export class GetDataService {
    obsMainUser: Subject<User> = new Subject<User>();
    obsUsers: Subject<User[]> = new Subject<User[]>();
    obsVideos: Subject<Video[]> = new Subject<Video[]>();

    // mainUser = this.obsMainUser.asObservable();
    // videos = this.obsVideos.asObservable();

    constructor (private http: HttpClient) {}

    private getMainUser(): Observable<User> {
        return this.http.get<User>(`http://127.0.0.1:5000/getMainUser`);
    }

    private getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`http://127.0.0.1:5000/getUsers`);
    }

    private getVideos(): Observable<Video[]> {
        return this.http.get<Video[]>(`http://127.0.0.1:5000/getVideos`);
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
}

