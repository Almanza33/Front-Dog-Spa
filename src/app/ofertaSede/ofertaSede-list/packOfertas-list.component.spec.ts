/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PackOfertasListComponent } from './packOfertas-list.component';

describe('PackOfertasListComponent', () => {
  let component: PackOfertasListComponent;
  let fixture: ComponentFixture<PackOfertasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackOfertasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackOfertasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
