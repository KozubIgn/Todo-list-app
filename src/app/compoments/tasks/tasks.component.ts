import {Component, OnInit} from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
this.taskService.geTasks().subscribe(tasks => this.tasks = tasks);
  }

}
