import { AuthState } from './reducer'
import { AppState } from '../../reducers/index'
import { createFeatureSelector, createSelector } from '@ngrx/store'

export const authStateSlector = createSelector(
    createFeatureSelector<AuthState>('authState'),
    (authState) => authState
)