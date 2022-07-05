import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/types/user";
import * as actions from './actions'
export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: ''
}

export const authReducer = createReducer(
    initialState,
    on(actions.login, state => ({...state, loading: true, error: ''})),
    on(actions.loginSuccess, (state, action) => ({ 
        user: action.user,
        loading: false,
        error: ''
    })),
    on(actions.loginFailure, (state, action) => ({
        user: state.user,
        loading: false,
        error: action.error
    }))
)