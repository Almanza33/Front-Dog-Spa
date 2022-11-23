/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ofertaSedeListComponent } from './packofertas-list.component';

describe('PackOfertasListComponent', () => {
  let component: ofertaSedeListComponent;
  let fixture: ComponentFixture<ofertaSedeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ofertaSedeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ofertaSedeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
