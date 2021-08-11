import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tap } from 'rxjs/operators' 

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'question', loadChildren: () => import('./question/questions.module').then((m) => m.QuestionsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
