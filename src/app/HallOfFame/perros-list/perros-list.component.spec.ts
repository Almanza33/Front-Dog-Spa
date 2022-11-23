/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerrosListComponent } from './perros-list.component';

describe('PerrosListComponent', () => {
  let component: PerrosListComponent;
  let fixture: ComponentFixture<PerrosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerrosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerrosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
