/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TermosCondicoesComponent } from './termos-condicoes.component';

describe('TermosCondicoesComponent', () => {
  let component: TermosCondicoesComponent;
  let fixture: ComponentFixture<TermosCondicoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermosCondicoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosCondicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
