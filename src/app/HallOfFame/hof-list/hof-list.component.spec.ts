/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HofListComponent } from './hof-list.component';

describe('HofListComponent', () => {
  let component: HofListComponent;
  let fixture: ComponentFixture<HofListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HofListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HofListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
