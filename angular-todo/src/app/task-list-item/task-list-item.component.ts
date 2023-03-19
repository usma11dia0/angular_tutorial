import { Component, Input, OnInit } from '@angular/core';

interface Task {
  title: string;
  done: boolean;
  deadline: Date;
}

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
    return !task.done && task.deadline < new Date();
  }
}
