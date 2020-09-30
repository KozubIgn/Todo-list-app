import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();


  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  setClass() {
    let classes = {
      task: true,
      'is-done': this.task.done
    };
    return classes;
  }

  onSwitch(task) {
    task.done = !this.task.done;
    this.taskService.switchToCompleted(task).subscribe(task => console.log(task));
  }

  onDelete(task) {
    this.deleteTask.emit(task);
  }

}
