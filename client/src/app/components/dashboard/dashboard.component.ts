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
      status: true,
      task: 'Prayer',
      createDate: new Date(),
      priority: 'low',
      author: 'true',
    },
    {
      id: '4',
      status: false,
      task: ' Windows Setup',
      createDate: new Date(),
      priority: 'medium',
      author: 'true',
    },
    {
      id: '2',
      status: true,
      task: 'Exercise',
      createDate: new Date(),
      priority: 'low',
      author: 'true',
    },

    {
      id: '3',
      status: false,
      task: 'third task',
      createDate: new Date(),
      priority: 'high',
      author: 'true',
    },
  ];

  addTask(newTask: Task) {
    this.tasks.push(newTask);
    console.log(this.tasks)
  }
  
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
