import { Component } from '@angular/core';
import { Task } from './models/task';
import { DayService } from './services/day.service';
import 'boxicons'
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  actual: Task = new Task();
  todaycheck: boolean = false;
  tomorrowcheck: boolean = false;



  todays: Task[] = [];
  tomorrows: Task[] = [];


  constructor(public service: DayService) {

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

  selecttoday(today: Task) {
    const result = this.todays.find(obj => obj.task === today.task)
    if (result) {
      this.todays = this.todays.filter(obj => obj.task !== today.task)
    } else {
      this.todays.push(today)
    }

    console.log(this.todays)
  }

  selecttomorrow(tomorrow: Task) {
    const result = this.tomorrows.find(obj => obj.task === tomorrow.task)
    if (result) {
      this.tomorrows = this.tomorrows.filter(obj => obj.task !== tomorrow.task)
    } else {
      this.tomorrows.push(tomorrow)
    }

    console.log(this.tomorrows)
  }

  selectremove() {
    if (this.todays.length > 0) {
      this.service.deleteToday(this.todays);
    }
    if (this.tomorrows.length > 0) {
      this.service.deleteTomorrow(this.tomorrows);
    }
    if(this.todays.length == 0 && this.tomorrows.length == 0) {
      alert("Please choose a task!");
    }


  }
}

