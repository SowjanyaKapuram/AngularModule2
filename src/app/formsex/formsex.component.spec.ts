import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsexComponent } from './formsex.component';

describe('FormsexComponent', () => {
  let component: FormsexComponent;
  let fixture: ComponentFixture<FormsexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
