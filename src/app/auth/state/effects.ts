import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import * as actions from './actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.login),
      exhaustMap(action =>
        this.authService.login(action.phoneNumber, action.password).pipe(
          map((res) => {
            const data: any = res.data
            return actions.loginSuccess(data.login)
          }),
          catchError(error => of(actions.loginFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}