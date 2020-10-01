import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TasksComponent} from './compoments/tasks/tasks.component';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TaskComponent} from './compoments/task/task.component';
import {AddTaskComponent} from './compoments/add-task/add-task.component';
import {FormsModule} from '@angular/forms';
import {DatePipeComponent} from './compoments/date-pipe/date-pipe.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EditTaskComponent } from './compoments/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    AddTaskComponent,
    DatePipeComponent,
    EditTaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
