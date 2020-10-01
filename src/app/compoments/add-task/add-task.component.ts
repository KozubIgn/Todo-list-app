import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewTask() {

    const task = {
      title: this.title,
      done: false
    };
    this.addTask.emit(task);
    this.title = '';
  }

}
