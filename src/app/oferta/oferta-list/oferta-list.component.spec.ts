import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertaListComponent } from './oferta-list.component';
import { OfertaService } from '../oferta.service';
import { asNativeElements, DebugElement } from '@angular/core';
import { OfertaDetail } from '../oferta-detail';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
//import {NgxPaginationModule} from 'ngx-pagination';
import { By } from '@angular/platform-browser';


describe('PackOfertasListComponent', () => {
  let component: OfertaListComponent;
  let fixture: ComponentFixture<OfertaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
