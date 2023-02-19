import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfSwitchForComponent } from './if-switch-for.component';

describe('IfSwitchForComponent', () => {
  let component: IfSwitchForComponent;
  let fixture: ComponentFixture<IfSwitchForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfSwitchForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfSwitchForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
