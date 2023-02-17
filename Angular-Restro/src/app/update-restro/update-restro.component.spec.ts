import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestroComponent } from './update-restro.component';

describe('UpdateRestroComponent', () => {
  let component: UpdateRestroComponent;
  let fixture: ComponentFixture<UpdateRestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
