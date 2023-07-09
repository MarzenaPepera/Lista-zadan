import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTask: string = '';

  constructor(private taskService: TaskService) {
  }

  add() {
    const task: Task = ({ name: this.newTask, created: new Date })
    this.taskService.addTask(task);
    this.newTask = '';
  }
}
