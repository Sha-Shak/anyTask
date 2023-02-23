import { Component, Input, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  @Input() tasks!: Task[];

}
