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
  deletetodays: Task[] = [];
  deletetomorrows: Task[] = [];




  constructor(public service: DayService) {


  }







  save() {
    if (this.todaycheck) {
      this.service.addToday(this.actual);

    }

    if (this.tomorrowcheck) {
      this.service.addTomorrow(this.actual);
    }


    if (!this.todaycheck && !this.tomorrowcheck) {
      alert("Pleace select a day!");
    }
    this.actual = new Task();





  }

  selecttoday(today: Task) {
    const result = this.deletetodays.find(obj => obj.task === today.task);
    if (result) {
      this.deletetodays = this.deletetodays.filter(obj => obj.task !== today.task);
    } else {
      this.deletetodays.push(Object.assign(new Task(), today));
    }

    console.log(this.deletetodays);
  }

  selecttomorrow(tomorrow: Task) {
    const result = this.deletetomorrows.find(obj => obj.task === tomorrow.task);
    if (result) {
      this.deletetomorrows = this.deletetomorrows.filter(obj => obj.task !== tomorrow.task);
    } else {
      this.deletetomorrows.push(Object.assign(new Task(), tomorrow));
    }

    console.log(this.deletetomorrows);
  }

  selectremove() {
    if (this.deletetodays.length == 0 && this.deletetomorrows.length == 0) {
      alert("Pleace choose a task!")
    }

    if (this.deletetodays.length > 0) {
      this.service.deleteToday(this.deletetodays);
      this.deletetodays = [];
    }
    if (this.deletetomorrows.length > 0) {
      this.service.deleteTomorrow(this.deletetomorrows);
      this.deletetomorrows = [];
    }





    this.service.gettodaydata();
    this.service.gettomorrowsdata();

  }

  gotomorrow() {
    if (this.deletetodays.length == 0) {
      alert("Pleace choose a task!")
    } else {
      this.service.deleteToday(this.deletetodays);
      this.service.moveTomorrow(this.deletetodays);
      this.deletetodays = [];
    }





    this.service.gettodaydata();
    this.service.gettomorrowsdata();

  }

  gotoday() {
    if (this.deletetomorrows.length == 0) {
      alert("Pleace choose a task!")
    } else {
      this.service.deleteTomorrow(this.deletetomorrows);
      this.service.moveToday(this.deletetomorrows);
      this.deletetomorrows = [];
    }




    this.service.gettodaydata();
    this.service.gettomorrowsdata();
  }
}

