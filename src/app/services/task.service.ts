import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksList: Array<Task> = [];
  private finishedList: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private finishedListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      { name: 'Nauka Angulara', created: new Date },
      { name: 'Gotowanie ', created: new Date },
      { name: 'Sprzątanie ', created: new Date },
    ];
    this.tasksListObs.next(this.tasksList);
  }

  addTask(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  move(task: Task) {
    this.finishedList.push(task);
    this.remove(task);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e != task);
    this.tasksListObs.next(this.tasksList);
    this.finishedListObs.next(this.finishedList);
  }

  gettasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getfinishedListObs(): Observable<Array<Task>> {
    return this.finishedListObs.asObservable();
  }
}
