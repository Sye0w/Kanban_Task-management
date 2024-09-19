import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { KanbanEffects } from './store/kanban/kanban.effects';
import { provideEffects } from '@ngrx/effects';
import { appReducers } from './store/reducers';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['theme', 'kanbanBoards', 'router'],
    rehydrate: true
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouterStore(),
    provideRouter(routes),
    provideHttpClient(),
    provideEffects([KanbanEffects]),
    provideStore(appReducers, { metaReducers }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
