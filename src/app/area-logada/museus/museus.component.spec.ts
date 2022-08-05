/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuseusComponent } from './museus.component';

describe('MuseusComponent', () => {
  let component: MuseusComponent;
  let fixture: ComponentFixture<MuseusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
