import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { EditorComponent } from './components/editor/editor.component';

import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { ChipsComponent } from './components/chips/chips.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    EditorComponent,
    ChipsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    NgxEditorModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ]
})
export class HomeModule { }
