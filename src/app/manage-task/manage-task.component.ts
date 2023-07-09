import { ViewEncapsulation } from '@angular/core'; //a nie '@angular/compiler'
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-manage-task',
  templateUrl: './manage-task.component.html',
  styleUrls: ['./manage-task.component.css'],
  // encapsulation: ViewEncapsulation.None - nie trzeba, bo dałam do styles.css
})
export class ManageTaskComponent {

  chores: string[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.getchoresListObs().subscribe((chores: Array<string>) => {
      this.chores = chores;
    });
  }

  done(chore: string) {
    this.taskService.move(chore);
  }

  delete(chore: string) {
    this.taskService.remove(chore);
  }

  getColor(): string {
    return this.chores.length >= 5 ? 'red' : 'green';
  }
}
