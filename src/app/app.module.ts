import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TasksComponent} from './compoments/tasks/tasks.component';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TaskComponent } from './compoments/task/task.component';
import { AddTaskComponent } from './compoments/add-task/add-task.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
