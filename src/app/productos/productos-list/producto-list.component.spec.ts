/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
//import { faker } from '@faker-js/faker';

import { ProductoListComponent } from './producto-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Sedes } from 'src/app/sedes/Sedes';
import { ProductoService} from '../producto.service';
import {Producto} from '../producto';
import { RouterTestingModule } from '@angular/router/testing';



describe('ProductosListComponent', () => {
  let component: ProductoListComponent;
  let fixture: ComponentFixture<ProductoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule],
      declarations: [ ProductoListComponent ],
      providers: [ProductoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoListComponent);
    component = fixture.componentInstance;

  //  let editorial = new Sedes(
  //    faker.datatype.number(),
  //    faker.lorem.sentence()
  //  );

  //  component.productos = [
  //    new Producto(
  //      faker.datatype.number(),
  //      faker.lorem.sentence(),
  //      faker.lorem.sentence(),
  //      faker.lorem.sentence(),
  //     faker.image.imageUrl(),
  //      faker.date.past(),
  //      Sedes,
  //      [],[]
  //    ),
  //  ];
  //  fixture.detectChanges();
  //  debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.productos[0].nombre
    );
  });

});
