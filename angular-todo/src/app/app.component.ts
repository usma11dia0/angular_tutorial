import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo';
  tasks = [
    {title: '牛乳を買う', done: false},
    {title: '可燃ごみを出す', done: true},
    {title: '銀行に行く', done: false},
  ]
}
