import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perro } from 'src/app/perro/Perro';
import { HallOfFame } from '../HallOfFame';
import { HallOfFameDetail } from '../HallOfFame-detail';
import { HallOfFameService } from '../hallOfFame.service';

@Component({
  selector: 'app-perros-list',
  templateUrl: './perros-list.component.html',
  styleUrls: ['./perros-list.component.css']
})
export class PerrosListComponent implements OnInit {

  hallOfFameId!: string;
  @Input() hallOfFameDetail!: HallOfFameDetail;

  constructor(
    private route: ActivatedRoute,
    private hallOfFameService: HallOfFameService
  ) { }

  getHallOfFame(){
    this.hallOfFameService.getHallOfFame(this.hallOfFameId).subscribe(hallOfFame=>{
      this.hallOfFameDetail = hallOfFame;
    })
  }

  ngOnInit() {
    if(this.hallOfFameDetail === undefined){
      this.hallOfFameId = this.route.snapshot.paramMap.get('id')!
      if(this.hallOfFameId){
        this.getHallOfFame();
      }
    }
  }

}
