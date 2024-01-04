import { Component } from '@angular/core';
import { Today } from './models/today';
import { Tomorrow } from './models/tomorrow';
import { DayService } from './services/day.service';
import 'boxicons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actualtoday:Today[]=[];
  actualtomorrow: Tomorrow[]=[];

  constructor(public service: DayService){

  }
}
