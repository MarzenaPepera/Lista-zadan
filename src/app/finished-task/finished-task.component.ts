import { Component, Input } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-finished-task',
  templateUrl: './finished-task.component.html',
  styleUrls: ['./finished-task.component.css']
})
export class FinishedTaskComponent {

  finished: Array<string> = [];

  constructor(private taskService: TaskService){
    this.taskService.getfinishedListObs().subscribe((finished: Array<string>) => {
      this.finished = finished;
    });
  }
}
