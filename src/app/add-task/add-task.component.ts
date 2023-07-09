import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTask: string = '';

  constructor(private taskService: TaskService){
  }

  add() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  }
}
