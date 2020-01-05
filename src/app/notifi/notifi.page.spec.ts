import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiPage } from './notifi.page';

describe('NotifiPage', () => {
  let component: NotifiPage;
  let fixture: ComponentFixture<NotifiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
