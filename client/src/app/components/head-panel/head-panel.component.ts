import { Component, Input, SimpleChanges } from '@angular/core';
import {
  faCheck,
  faHourglassHalf,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-head-panel',
  templateUrl: './head-panel.component.html',
  styleUrls: ['./head-panel.component.css'],
})
export class HeadPanelComponent {
  @Input() tasks: Task[] = [];
  @Input() test = '';
  create = faPlus;
  done = faCheck;
  pending = faHourglassHalf;
  createText = 'Add Task';
  doneCount = 0;
  pendingCount = 0;
  doneText = `Done`;
  pendingText = `Pending`;

  stat() {
    console.log('stat run');
    this.tasks.map((task) => {
      task.status ? this.doneCount++ : this.pendingCount++;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('change', changes);
  }
}
