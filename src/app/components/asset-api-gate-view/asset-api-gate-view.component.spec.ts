import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetApiGateViewComponent } from './asset-api-gate-view.component';

describe('AssetApiGateViewComponent', () => {
  let component: AssetApiGateViewComponent;
  let fixture: ComponentFixture<AssetApiGateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetApiGateViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetApiGateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
