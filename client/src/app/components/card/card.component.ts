import { Component, Input } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faPencil } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() task!: Task;
  button = 'button';
  delete = faTrashCan;
  pencil = faPencil;
  check = faCheck;
  doneCard = 'bg-green-200';
  statusUpdate(event: any, task: Task) {
    console.log('changed', task);
    if (event.target.checked) {
      task.status = true;
    } else {
      task.status = false;
    }
  }
}
