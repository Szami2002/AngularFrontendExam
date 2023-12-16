import { Injectable } from '@angular/core';
import { Today } from '../models/today';
import { Tomorrow } from '../models/tomorrow';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  todays: Today[] = [];
  tomorrows: Tomorrow[] = [];

  constructor(private db: AngularFireDatabase) {
    db.list<Today>('todays').valueChanges().subscribe(t => {
      this.todays = t;
    })

    db.list<Tomorrow>('tomorrows').valueChanges().subscribe(t => {
      this.tomorrows = t;
    })
  }

  addToday(today: Today) {
    this.db.list('todays').push(today);
  }

  addTomorrow(tomorrow: Tomorrow) {
    this.db.list('tomorrows').push(tomorrow);
  }
}
