import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientHomeComponent } from './components/client-home/client-home.component';
import { SolutionViewComponent } from './components/solution-view/solution-view.component';
import { SolutionHomeComponent } from './components/solution-home/solution-home.component';
import { MainApiGateViewComponent } from './components/main-api-gate-view/main-api-gate-view.component';
import { AssetApiGateViewComponent } from './components/asset-api-gate-view/asset-api-gate-view.component';
import { ApiHomeComponent } from './components/api-home/api-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientViewComponent,
    ClientListComponent,
    ClientHomeComponent,
    SolutionViewComponent,
    SolutionHomeComponent,
    MainApiGateViewComponent,
    AssetApiGateViewComponent,
    ApiHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    GraphQLModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    AuthModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:4000/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
