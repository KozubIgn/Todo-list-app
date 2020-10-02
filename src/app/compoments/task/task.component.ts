import {Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;
  @Input() currentTask: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() editTask: EventEmitter<Task> = new EventEmitter();


  constructor(private taskService: TaskService) {
  }

  setClass() {
    let classes = {
      task: true,
      'is-done': this.task.done
    };
    return classes;
  }

  onSwitch(task): void {
    task.done = !this.task.done;
    this.taskService.switchToCompleted(task).subscribe(task => console.log(task));
  }

  onDelete(task): void {
    this.deleteTask.emit(task);
  }

  onEdit(): void {
    console.log(this.task);
    const currentTask = {
      id: this.task.id,
      title: this.task.title,
      done: this.task.done
    };
    // this.editTask.emit(currentTask);
    this.taskService.editTask(currentTask).subscribe();
  }

}
