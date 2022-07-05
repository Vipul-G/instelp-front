import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionHomeComponent } from './solution-home.component';

describe('SolutionHomeComponent', () => {
  let component: SolutionHomeComponent;
  let fixture: ComponentFixture<SolutionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
