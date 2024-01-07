import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Task } from '../models/task';
import { remove } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  //todays: Today[] = [];
  //tomorrows: Tomorrow[] = [];
  todays: Map<string, Task> = new Map<string, Task>();
  tomorrows: Map<string, Task> = new Map<string, Task>();
  constructor(private db: AngularFireDatabase) {
    /*db.list<Today>('todays').valueChanges().subscribe(t => {
      this.todays = t;
    })*/
    /*db.list<Tomorrow>('tomorrows').valueChanges().subscribe(t => {
      this.tomorrows = t;
    })*/

    db.object('todays').valueChanges().subscribe(t => {
      this.todays = new Map(Object.entries(t as Object));
    });
    db.object('tomorrows').valueChanges().subscribe(t => {
      this.tomorrows = new Map(Object.entries(t as Object));
    });

     
     
  }



  addToday(today: Task) {
    this.db.list('todays').push(today);
  }

  addTomorrow(tomorrow: Task) {
    this.db.list('tomorrows').push(tomorrow);
  }

  deleteToday(task:any) {
    
    this.db.list('todays').remove(task)
    
    
  }
  
  deleteTomorrow(task: any) {
   
    
    this.db.list('tomorrows').remove(task)
    
    
  }
}
