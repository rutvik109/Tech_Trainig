import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushSliceComponent } from './push-slice.component';

describe('PushSliceComponent', () => {
  let component: PushSliceComponent;
  let fixture: ComponentFixture<PushSliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushSliceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
