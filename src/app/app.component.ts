import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ToDo';

  choresList: Array<string> = [];
  finishedList: Array<string> = [];

  ngOnInit(): void {
    this.choresList = ['Nauka Angulara', 'Gotowanie', 'Sprzątanie'];
  }

  addTask(chore: string) {
    this.choresList.push(chore);
  }

  move(chore: string) {
    this.finishedList.push(chore);
    this.remove(chore)
  }

  remove(chore: string) {
    this.choresList=this.choresList.filter(e=>e!=chore);
  }
}
