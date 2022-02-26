import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../../app/models/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL: string = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) { }

  getAllUsers() {

    return this.httpClient.get<User[]>(this.baseURL + '/users');
  }
  addUser(newUser: Omit<User, 'id'>){
    return this.httpClient.post<User>(this.baseURL + '/users', {...newUser} );
  }
  deleteUserById(id: number){
    return this.httpClient.delete(this.baseURL + '/users/' + id);
  }
  editUser(id: number, newUser: Omit<User, 'id'>){
    return this.httpClient.put<User>(this.baseURL + '/users/' + id, newUser);
  }
}
