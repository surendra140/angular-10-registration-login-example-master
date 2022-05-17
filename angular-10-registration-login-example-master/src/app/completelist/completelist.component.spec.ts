import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletelistComponent } from './completelist.component';

describe('CompletelistComponent', () => {
  let component: CompletelistComponent;
  let fixture: ComponentFixture<CompletelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
