import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson02Component } from './lesson02.component';

describe('Lesson02Component', () => {
  let component: Lesson02Component;
  let fixture: ComponentFixture<Lesson02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lesson02Component]
    });
    fixture = TestBed.createComponent(Lesson02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
