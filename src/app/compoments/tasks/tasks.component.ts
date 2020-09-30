import {Component, OnInit} from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task.service';

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
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    // UI side
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    // server side
    this.taskService.deleteTaskFromDB(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(task => {
      this.tasks.push(task);
    });
  }
}
