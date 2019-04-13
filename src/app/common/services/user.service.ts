import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  restUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const usersUrl = `http://localhost:5000/api/users`;
    return this.http.get<User[]>(usersUrl);
  }
}
