import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { User } from '../_models/user.model';
import { Video } from '../_models/video.model';

@Injectable()
export class GetDataService {
    obsMainUser: Subject<User> = new Subject<User>();
    obsUsers: Subject<User[]> = new Subject<User[]>();
    obsVideos: Subject<Video[]> = new Subject<Video[]>();

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
            (data) => {
                this.obsMainUser.next(data);
            }
        );
    }

    setUsers() {
        this.getUsers().subscribe(
            (data) => {
                this.obsUsers.next(data);
            }
        );
    }

    setVideos() {
        this.getVideos().subscribe(
            (data) => {
                this.obsVideos.next(data);
            }
        );
    }
}

