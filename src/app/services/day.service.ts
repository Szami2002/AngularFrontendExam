import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Task } from '../models/task';
import { remove } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  todays:Task[]=[];
  tomorrows:Task[]=[];
  //todays: Map<string, Task> = new Map<string, Task>();
  //tomorrows: Map<string, Task> = new Map<string, Task>();
  gettodays:Task[]=[];
  gettomorrows:Task[]=[];

  constructor() {
    /*db.list<Today>('todays').valueChanges().subscribe(t => {
      this.todays = t;
    })*/
    /*db.list<Tomorrow>('tomorrows').valueChanges().subscribe(t => {
      this.tomorrows = t;
    })*/

    /*db.object('todays').valueChanges().subscribe(t => {
      this.todays = new Map(Object.entries(t as Object));
    });*/
    /*db.object('tomorrows').valueChanges().subscribe(t => {
      this.tomorrows = new Map(Object.entries(t as Object));
    });*/

    this.gettodaydata();
    this.gettomorrowsdata();
    

     
     
  }

  gettodaydata() {
    const todaysData = localStorage.getItem("todays");
    this.gettodays = todaysData ? JSON.parse(todaysData) : [];
  }

  gettomorrowsdata() {
    const tomorrowsData = localStorage.getItem("tomorrows");
    this.gettomorrows = tomorrowsData ? JSON.parse(tomorrowsData) : [];
  }

  

  addToday(today: Task) {
    if(this.gettodays){
      this.todays=this.gettodays
      this.todays.push(Object.assign(new Task(),today))
    }else{
      this.todays.push(Object.assign(new Task(),today))
    }
    
    localStorage.setItem('todays',JSON.stringify(this.todays))
  }

  addTomorrow(tomorrow: Task) {
    if(this.gettomorrows){
      this.tomorrows=this.gettomorrows
      this.tomorrows.push(Object.assign(new Task(),tomorrow))
    }else{
      this.tomorrows.push(Object.assign(new Task(),tomorrow))
    }
    
    
    localStorage.setItem('tomorrows',JSON.stringify(this.tomorrows))
  }

  deleteToday(tasks:Task[]) {
    
    const deletitems=this.gettodays.filter(obj => tasks.some(b=>b.task!==obj.task))
    localStorage.setItem('todays',JSON.stringify(deletitems))
    
    
  }
  
  deleteTomorrow(tasks: Task[]) {
   
    
    const deletitems=this.gettomorrows.filter(obj => tasks.some(b=>b.task!==obj.task))
    localStorage.setItem('tomorrows',JSON.stringify(deletitems))
    
  }
}
