/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuseuComponent } from './museu.component';

describe('MuseuComponent', () => {
  let component: MuseuComponent;
  let fixture: ComponentFixture<MuseuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
