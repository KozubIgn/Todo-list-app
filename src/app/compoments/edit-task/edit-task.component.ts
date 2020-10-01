import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../../models/task';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() selectedTask: Task;
  @Output() editTask: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  // editCurrentTask(selectedTask) {
  //   const selectedTask = {
  //     title: this.title,
  //     done: false
  //   };
  //   this.editTask.emit(selectedTask.title);
  //
  // }

}
