import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OneComponentVersionComponent } from './one-component-version/one-component-version.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ManageTaskComponent } from './manage-task/manage-task.component';
import { FinishedTaskComponent } from './finished-task/finished-task.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponentVersionComponent,
    AddTaskComponent,
    ManageTaskComponent,
    FinishedTaskComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
