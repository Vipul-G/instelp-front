import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainApiGateViewComponent } from './main-api-gate-view.component';

describe('MainApiGateViewComponent', () => {
  let component: MainApiGateViewComponent;
  let fixture: ComponentFixture<MainApiGateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainApiGateViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainApiGateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
