import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tap } from 'rxjs/operators' 
import { ApiHomeComponent } from './components/api-home/api-home.component';
import { ClientHomeComponent } from './components/client-home/client-home.component';
import { ClientListComponent } from './components/client-list/client-list.component'
import { SolutionHomeComponent } from './components/solution-home/solution-home.component';
const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: 'docs/mtuzo/card-offer-sol/online-offer-api', component: ApiHomeComponent },
  { path: 'docs/mtuzo/card-offer-sol', component: SolutionHomeComponent },
  { path: 'docs/mtuzo', component: ClientHomeComponent }, // TODO: make client dynamic
  { path: 'docs', component: ClientListComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
