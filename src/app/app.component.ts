import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { authStateSlector } from './auth/state/selectors';
import { UserDto } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private alive = true;
  title = 'Instelp';
  user: any = null
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(authStateSlector).pipe(takeWhile(() => this.alive)).subscribe((data) => {
      this.user = data.user
    })
  }

  ngOnDestroy(): void {
    this.alive = false
  }
  
}
