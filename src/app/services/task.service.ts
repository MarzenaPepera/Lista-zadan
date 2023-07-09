import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private choresList: Array<string> = [];
  private finishedList: Array<string> = [];

  private choresListObs = new BehaviorSubject<Array<string>>(this.choresList);
  private finishedListObs = new BehaviorSubject<Array<string>>(this.finishedList);

  constructor() {
    this.choresList = ['Nauka Angulara', 'Gotowanie', 'Sprzątanie'];
    this.choresListObs.next(this.choresList);
  }

  addTask(chore: string) {
    this.choresList.push(chore);
    this.choresListObs.next(this.choresList);
  }

  move(chore: string) {
    this.finishedList.push(chore);
    this.remove(chore);
  }

  remove(chore: string) {
    this.choresList=this.choresList.filter(e=>e!=chore);
    this.choresListObs.next(this.choresList);
    this.finishedListObs.next(this.finishedList);
  }

  getchoresListObs(): Observable<Array<string>>{
    return this.choresListObs.asObservable();
  }

  getfinishedListObs(): Observable<Array<string>>{
    return this.finishedListObs.asObservable();
  }
}
