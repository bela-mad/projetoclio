/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmConstrucaoComponent } from './em-construcao.component';

describe('EmConstrucaoComponent', () => {
  let component: EmConstrucaoComponent;
  let fixture: ComponentFixture<EmConstrucaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmConstrucaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmConstrucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
