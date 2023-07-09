import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './one-component-version.component.html',
  styleUrls: ['./one-component-version.component.css']
})
export class OneComponentVersionComponent {
  title = 'ToDo';

  chores: Array<string> = [];
  finished: Array<string> = [];

  newTask: string = '';

  add() {
    this.chores.push(this.newTask);
    this.newTask='';
    console.log('chore: '+this.chores);
    console.log('done: '+this.finished);
  }

  done(chore: string, index: number) {
    this.chores.splice(index,1); //lub remove(index)
    this.finished.push(chore);
    console.log('done');
    console.log('chore: '+this.chores);
    console.log('done: '+this.finished);  
  }

  delete(index: number) {
    this.chores.splice(index,1);
    console.log('delete');
    console.log('chore: '+this.chores);
    console.log('done: '+this.finished);  
  }
}
