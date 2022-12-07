import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sedes } from '../Sedes';
import { SedesDetail } from '../Sedes-detail';
import { SedesService } from '../sedes.service';

@Component({
  selector: 'app-sedes-list',
  templateUrl: './sedes-list.component.html',
  styleUrls: ['./sedes-list.component.css']
})
export class SedesListComponent implements OnInit {

  sedes: Array<SedesDetail> = [];
  selected: Boolean = false;
  selectedSedes!: SedesDetail;
  searchText:string = '';

  constructor(private route: ActivatedRoute,private sedesService: SedesService) { }

  getSedes() {
     this.sedesService.getSedes().subscribe(sedes => this.sedes=sedes.slice(1,sedes.length));
  }
  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;

  }

  onSelected(sedesDetail: SedesDetail): void{
    this.selected = true;
    this.selectedSedes = sedesDetail;
  }
  ngOnInit() {
  this.getSedes();
  }

}
