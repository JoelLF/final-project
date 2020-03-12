import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal6Page } from './modal6.page';

describe('Modal6Page', () => {
  let component: Modal6Page;
  let fixture: ComponentFixture<Modal6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
