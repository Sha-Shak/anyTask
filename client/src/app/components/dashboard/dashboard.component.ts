import { Component } from '@angular/core';
import { Task } from '../../interface/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  tasks: Task[] = [
    {
      id: '1',

      task: 'first task',
      createDate: new Date(),
      status: 'pending',
      author: 'true',
    },
    {
      id: '2',

      task: 'second task',
      createDate: new Date(),
      status: 'pending',
      author: 'true',
    },

    {
      id: '3',

      task: 'third task',
      createDate: new Date(),
      status: 'done',
      author: 'true',
    },
  ];

  // for later
  /*
  task!:{
    id: string,
    task: string,
    time: string,
    subTasks?: []
    author: string,
  }

  subTask!:{
    task: string,
    time: string,
  }
  */
}
