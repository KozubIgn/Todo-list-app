import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TasksComponent} from './compoments/tasks/tasks.component';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TaskComponent } from './compoments/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
