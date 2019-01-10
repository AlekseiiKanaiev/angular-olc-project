import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';

@Injectable()
export class GetDataService {
    constructor (private http: HttpClient) {}

    getMainUser(): Observable<User> {
        return this.http.get<User>(`http://127.0.0.1:5000/getMainUser`);
    }
}

