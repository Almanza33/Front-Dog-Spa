/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PerrosListComponent } from './perros-list.component';
import { Sedes } from 'src/app/sedes/Sedes';
import { HallOfFameDetail } from '../HallOfFame-detail';
import { HallOfFame } from "../HallOfFame";
import { Perro } from 'src/app/perro/Perro';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PerrosListComponent', () => {
  let component: PerrosListComponent;
  let fixture: ComponentFixture<PerrosListComponent>;
  let debug: DebugElement;
  let perrosSize: number;
  let hoFId:number;
  let hoFNombre:string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ PerrosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerrosListComponent);
    component = fixture.componentInstance;
    perrosSize = 6;

    hoFId = faker.datatype.number()
    hoFNombre = faker.lorem.sentence()


    let sede = new Sedes(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    )

    let hoF = new HallOfFame(
      hoFId,
      hoFNombre,
      sede
    )

    let perros = Array(perrosSize);
    for (let i = 0; i < perrosSize ; i++){
      perros[i] = new Perro(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.image.imageUrl(),
        hoF
      )
    }

    component.hallOfFameDetail = new HallOfFameDetail(
      hoFId,
      hoFNombre,
      sede,
      perros

    )


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p.h7.p-2 element with HallOfFame.name', () =>{
    const element: HTMLElement = debug.query(By.css('p.h7.p-2.text-center.display-4.titulo')).nativeElement;
    expect(element.textContent).toContain(component.hallOfFameDetail.nombre);
  });





});
