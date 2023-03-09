import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeObservableComponent } from './custome-observable.component';

describe('CustomeObservableComponent', () => {
  let component: CustomeObservableComponent;
  let fixture: ComponentFixture<CustomeObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
