import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {

  constructor() {
    this.task =  {
      title: '',
      done: false,
      deadline: new Date()
    };
  }

  @Input() task:Task;

  ngOnInit(): void {
  }


  isOverdue(task:Task) {
    return !task.done && task.deadline && task.deadline.getTime() < new Date().setHours(0, 0, 0, 0);
  }
}
