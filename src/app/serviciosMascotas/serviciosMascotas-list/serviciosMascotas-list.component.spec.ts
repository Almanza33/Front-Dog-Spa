/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServiciosMascotasListComponent } from './serviciosMascotas-list.component';

describe('ServiciosMascotasListComponent', () => {
  let component: ServiciosMascotasListComponent;
  let fixture: ComponentFixture<ServiciosMascotasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosMascotasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosMascotasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
