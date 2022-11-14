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

  sedes:  Array<SedesDetail> = [];

  constructor(private route: ActivatedRoute,private sedesService: SedesService) { }

  getSedes(): void {
    this.sedesService.getSedes().subscribe(sedes => this.sedes=sedes);
  }

  ngOnInit() {
  this.getSedes();
  }

}
