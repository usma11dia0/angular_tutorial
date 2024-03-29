import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  constructor() {}

  @Output() addTask = new EventEmitter<Task>();

  newTask = {
    title: '',
    deadline: null,
  };

  ngOnInit(): void {
  }

  submit() {
    this.addTask.emit({
      title: this.newTask.title,
      done: false,
      deadline: this.newTask.deadline ? new Date(this.newTask.deadline) : null,
    });
    this.newTask = {
      title: '',
      deadline: null,
    };
  };
}
