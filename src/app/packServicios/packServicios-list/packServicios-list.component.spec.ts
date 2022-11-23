/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PackServiciosListComponent } from './packServicios-list.component';

describe('PackServiciosListComponent', () => {
  let component: PackServiciosListComponent;
  let fixture: ComponentFixture<PackServiciosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackServiciosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackServiciosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
