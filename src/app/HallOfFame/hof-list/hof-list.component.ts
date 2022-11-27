import { Component, OnInit } from '@angular/core';
import { HallOfFameDetail } from '../HallOfFame-detail';
import { HallOfFameService } from '../hallOfFame.service';

@Component({
  selector: 'app-hof-list',
  templateUrl: './hof-list.component.html',
  styleUrls: ['./hof-list.component.css']
})
export class HofListComponent implements OnInit {

  hofs: Array<HallOfFameDetail> = [];
  selectedHof!: HallOfFameDetail;
  selected: boolean = false;


  searchText:string = '';

  constructor(private hofService: HallOfFameService) { }


  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    //console.log(this.searchText);

  }

  getHofs(){
    this.hofService.getAllHallsOfFame().subscribe(hofs=>{
      this.hofs = hofs;
    })
  }

  selectHof(hof: HallOfFameDetail){
    this.selectedHof = hof;
    this.selected = true;
  }

  ngOnInit() {
    this.getHofs();
  }

}
