import { Injectable, OnDestroy } from '@angular/core';
import { User, UserDto } from '../types/user';
import {Apollo, gql} from 'apollo-angular';
import { Observable } from '@apollo/client/utilities';
import { takeWhile, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { authStateSlector } from '../auth/state/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private _user: User | null = null;
  private alive = true;
  constructor(private store: Store, private apollo: Apollo) { 
    this.store.select(authStateSlector).pipe(takeWhile(() => this.alive)).subscribe((data) => {
      this._user = data.user;
    })
  }

  get user() { return this._user }
  register(userDto: UserDto) {
    return this.apollo.mutate({
      mutation: gql`
      mutation($registerUserInput: RegisterInput!) {
        registerUser(input: $registerUserInput) {
         code
         message
         success
       }
      }
      `,
      variables: { registerUserInput: userDto }
    })
  }

  login(phoneNumber: string, password: string) {
    return this.apollo.mutate({
      mutation: gql`
      mutation {
        login(phoneNumber: "${phoneNumber}", password: "${password}") {
          token
          message
          success
          user {
            fullName
            phoneNumber
            email
            _id
          }
        }
      }
      `
    }).pipe(tap((res) => {
      const login: any = (res.data as any).login;
      localStorage.setItem('accessToken', login.token)
    }))
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
