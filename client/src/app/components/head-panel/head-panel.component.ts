import { Component } from '@angular/core';
import { faPlus, faCheck, faHourglassHalf} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-head-panel',
  templateUrl: './head-panel.component.html',
  styleUrls: ['./head-panel.component.css']
})
export class HeadPanelComponent {
  create = faPlus;
  done = faCheck;
  pending = faHourglassHalf;
  doneText = "Done";
  pendingText = "Pending";
  createText = "Add Task"

}
