import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson03Component } from './lesson03.component';

describe('Lesson03Component', () => {
  let component: Lesson03Component;
  let fixture: ComponentFixture<Lesson03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lesson03Component]
    });
    fixture = TestBed.createComponent(Lesson03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
