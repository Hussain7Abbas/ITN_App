import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { add_investorPage } from './add_investor.page';

describe('add_investorPage', () => {
  let component: add_investorPage;
  let fixture: ComponentFixture<add_investorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ add_investorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(add_investorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
