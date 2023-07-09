import { ViewEncapsulation } from '@angular/core'; //a nie '@angular/compiler'
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-manage-task',
  templateUrl: './manage-task.component.html',
  styleUrls: ['./manage-task.component.css'],
  // encapsulation: ViewEncapsulation.None - nie trzeba, bo dałam do styles.css
})
export class ManageTaskComponent {

  tasks: Array<Task> = [];

  constructor(private taskService: TaskService) {
    this.taskService.gettasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasks = tasks.slice();
    });
  }

  done(task: Task) {
    task.end = new Date;
    this.taskService.move(task);
  }

  delete(task: Task) {
    this.taskService.remove(task);
  }

  getColor(): string {
    return this.tasks.length >= 5 ? 'red' : 'green';
  }
}
