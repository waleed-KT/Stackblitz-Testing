import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DataService } from '../data.service';
@Component({
  selector: 'app-addition-btn',
  templateUrl: './addition-btn.component.html',
  styleUrls: ['./addition-btn.component.css']
})
export class AdditionBtnComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit() {}

  onClick() {
    this.dataService.id++;
    console.log(this.dataService.id);
  }
}
