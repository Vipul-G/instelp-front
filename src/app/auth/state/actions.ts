import { createAction, props } from '@ngrx/store';
import { User, UserDto } from '../../types/user';

export const login = createAction(
  '[Login Page] Login',
  props<{ phoneNumber: string; password: string }>()
);
export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{token: String; user: User;
    message: String;
    success: Boolean;}>()
)
export const loginFailure = createAction(
  '[Login Page] Login Failure',
  props<{error: any}>()
)

export const register = createAction(
    '[Register Page] Register',
    props<UserDto>()
)