/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServiciosDuenosListComponent } from './serviciosDuenos-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('ServiciosDuenosListComponent', () => {
  let component: ServiciosDuenosListComponent;
  let fixture: ComponentFixture<ServiciosDuenosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosDuenosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosDuenosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
