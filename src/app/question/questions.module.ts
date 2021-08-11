import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionListComponent } from './components/question-list/question-list.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    QuestionListComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MatCardModule
  ]
})
export class QuestionsModule { }
