import { ViewEncapsulation } from '@angular/core'; //a nie '@angular/compiler'
import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-manage-task',
  templateUrl: './manage-task.component.html',
  styleUrls: ['./manage-task.component.css'],
  // encapsulation: ViewEncapsulation.None - nie trzeba, bo dałam do styles.css
})
export class ManageTaskComponent {
  
  @Input()
  chores: Array<string> = [];

  @Output()
  eventFinished = new EventEmitter<string>();

  done(chore: string) {
    this.eventFinished.emit(chore);
  }

  delete(chore: string) {
    this.eventFinished.emit(chore);
  }

  getColor(): string{
    return this.chores.length >=5 ? 'red' : 'green';
  }
}
