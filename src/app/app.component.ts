import { Component } from '@angular/core';
import { DayService } from './services/day.service';
import { Today } from './models/today';
import { Tomorrow } from './models/tomorrow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFrontendExam';
  actualToday:Today=new Today();
  actualTomorrow: Tomorrow=new Tomorrow();

  constructor(public service: DayService){

  }
}
