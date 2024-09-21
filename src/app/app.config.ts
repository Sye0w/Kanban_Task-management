import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore, ActionReducer, MetaReducer } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { provideHttpClient } from '@angular/common/http';
import { KanbanEffects } from './store/kanban/kanban.effects';
import { provideEffects } from '@ngrx/effects';
import { appReducers } from './store/reducers';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['theme', 'kanban'],
    rehydrate: true,
    storage: localStorage,
    removeOnUndefined: true,
    syncCondition: (state) => state.kanban && state.kanban.ids && state.kanban.ids.length > 0
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
    provideStore({ ...appReducers, router: routerReducer }, { metaReducers }),
    provideStoreDevtools({ 
      maxAge: 25, 
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    })
  ]
};