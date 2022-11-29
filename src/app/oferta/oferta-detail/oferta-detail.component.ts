import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaDetail } from '../oferta-detail';
import { OfertaService } from '../oferta.service';

@Component({
  selector: 'app-oferta-detail',
  templateUrl: './oferta-detail.component.html',
  styleUrls: ['./oferta-detail.component.css']
})
export class OfertaDetailComponent implements OnInit {

  bookId!: string;

  constructor() { }

  ngOnInit() {
  }

}

