import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ofertaSede } from '../ofertaSede';
import { ofertaSedesDetail } from '../ofertaSede-detail';
import {ofertaSedeService } from '../ofertaSedes.service';

@Component({
  selector: 'app-ofertaSede-list',
  templateUrl: './packOfertas-list.component.html',
  styleUrls: ['./packOfertas-list.component.css']
})
export class ofertaSedeListComponent implements OnInit {

  sedes:  Array<ofertaSedesDetail> = [];

  constructor(private route: ActivatedRoute,private sedesService: ofertaSedeService) { }

  ngOnInit() {

  }

}
