import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  techCtrl = new FormControl();
  filteredTechs: Observable<string[]>;
  techs: string[] = ['Angular'];
  allTechs: string[] = ['React', 'Angular', 'Node', 'Vue', 'HTML', 'CSS'];

  @ViewChild('techInput') techInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredTechs = this.techCtrl.valueChanges.pipe(
        startWith(null),
        map((tech: string | null) => tech ? this._filter(tech) : this.allTechs.slice()));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tech
    if (value) {
      this.techs.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.techCtrl.setValue(null);
  }

  remove(tech: string): void {
    const index = this.techs.indexOf(tech);

    if (index >= 0) {
      this.techs.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.techs.push(event.option.viewValue);
    this.techInput.nativeElement.value = '';
    this.techCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTechs.filter(tech => tech.toLowerCase().includes(filterValue));
  }

}
