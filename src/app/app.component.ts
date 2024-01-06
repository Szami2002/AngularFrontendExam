import { Component } from '@angular/core';
import { Today } from './models/today';
import { Tomorrow } from './models/tomorrow';
import { DayService } from './services/day.service';
import 'boxicons'
import {ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  actual: string = "";
  todaycheck: boolean = false;
  tomorrowcheck: boolean = false;

  today: string = "";
  tomorrow: string = "";
  

  constructor(public service: DayService) {

  }

  

  doAction(event:any){
    
      this.today=event.target.value
    
  }



  save() {
    if (this.todaycheck) {
      this.service.addToday(this.actual)
    }

    if (this.tomorrowcheck) {
      this.service.addTomorrow(this.actual)
    }


    if (!this.todaycheck && !this.tomorrowcheck) {
      alert("Pleace select a day!")
    }






  }

  remove() {

   this.service.deleteToday(this.today)

    this.service.deleteTomorrow(this.tomorrow)



  }

}



