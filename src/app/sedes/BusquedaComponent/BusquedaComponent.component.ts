import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-BusquedaComponent',
  templateUrl: './BusquedaComponent.component.html',
  styleUrls: ['./BusquedaComponent.component.css']
})
export class BusquedaComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enteredSearchValue:string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();


  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
