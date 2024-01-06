import { Injectable } from '@angular/core';
import { Today } from '../models/today';
import { Tomorrow } from '../models/tomorrow';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  //todays: Today[] = [];
  //tomorrows: Tomorrow[] = [];
  todays: Map<string, Today> = new Map<string, Today>();
  tomorrows: Map<string, Tomorrow> = new Map<string, Tomorrow>();
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



  addToday(today: string) {
    this.db.list('todays').push(today);
  }

  addTomorrow(tomorrow: string) {
    this.db.list('tomorrows').push(tomorrow);
  }

  deleteToday(today: string){
    this.db.list('todays').remove(today);
  }

  deleteTomorrow(tomorrow: string){
    this.db.list('tomorrows').remove(tomorrow);
  }
}
