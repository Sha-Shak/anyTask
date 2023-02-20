import { Component, Input} from '@angular/core';
import {
  faTrashCan,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons';
import { faPencil, faCheck
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() num!:number;
  button = "button";
  delete = faTrashCan;
  pencil = faPencil;
  check = faCheck;

}
