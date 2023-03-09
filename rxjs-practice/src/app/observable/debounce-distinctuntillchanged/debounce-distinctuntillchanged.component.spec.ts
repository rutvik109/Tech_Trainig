import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceDistinctuntillchangedComponent } from './debounce-distinctuntillchanged.component';

describe('DebounceDistinctuntillchangedComponent', () => {
  let component: DebounceDistinctuntillchangedComponent;
  let fixture: ComponentFixture<DebounceDistinctuntillchangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceDistinctuntillchangedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceDistinctuntillchangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
