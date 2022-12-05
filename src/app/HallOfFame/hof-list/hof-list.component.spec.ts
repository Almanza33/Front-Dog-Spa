/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HofListComponent } from './hof-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Sedes } from 'src/app/sedes/Sedes';
import { faker } from '@faker-js/faker';
import { HallOfFame } from '../HallOfFame';
import { HallOfFameDetail } from '../HallOfFame-detail';
import { FormsModule } from '@angular/forms';

describe('HofListComponent', () => {
  let component: HofListComponent;
  let fixture: ComponentFixture<HofListComponent>;
  let debug:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule, FormsModule],
      declarations: [ HofListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HofListComponent);
    component = fixture.componentInstance;


    let sede = new Sedes(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    )

    let testHofs: Array<HallOfFameDetail> = [];

    for(let i = 0; i < 10 ; i++){
      testHofs[i] = new HallOfFameDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        sede,
        []
      )
    }


    component.hofs = testHofs;




    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a h2 title', () => {
    const element: HTMLElement = debug.query(By.css('h2.text-center.display-4')).nativeElement;
    expect(element.textContent).toContain('Halls Of Fame');
  });

  it('Should have 10 div.book-card elements', ()=> {
    expect(debug.queryAll(By.css('div.book-card')).length == 10).toBeTrue();
  });



});
