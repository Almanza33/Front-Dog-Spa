/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SedesListComponent } from './sedes-list.component';

describe('SedesListComponent', () => {
  let component: SedesListComponent;
  let fixture: ComponentFixture<SedesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
