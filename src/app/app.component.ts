import { Component, VERSION } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dataservice: DataService) {}
  id: number = 0;
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    setInterval(() => {
      this.id = this.dataservice.getId();
      // this.id++;
    }, 100);
  }
}
