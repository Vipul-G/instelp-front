import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as auth from '../auth/state/reducer'

export interface AppState {
  authState?: auth.AuthState
}

export const reducers: ActionReducerMap<AppState> = {
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
