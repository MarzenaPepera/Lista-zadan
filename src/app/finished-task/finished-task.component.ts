import { Component, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-finished-task',
  templateUrl: './finished-task.component.html',
  styleUrls: ['./finished-task.component.css']
})
export class FinishedTaskComponent {

  finished: Array<Task> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getfinishedListObs().subscribe((finished: Array<Task>) => {
      this.finished = finished;
    });
  }
}
