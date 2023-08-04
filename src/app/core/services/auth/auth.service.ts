import { Injectable } from '@angular/core';

interface UserInfo {
  userName: string;
  uid: string;
  createdAt: number;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userInfo!: UserInfo;

  constructor() {
    this.userInfo = {
      userName: 'Prashant',
      uid: '123456',
      createdAt: Date.now(),
    };
  }

  get isLoggedIn() {
    return this.userInfo ? true : false;
  }
}
