import { Component } from '@angular/core';
import { faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {
  button="button";
  delete = faTrashCan;
  cancel = faXmark;
  cancelText="Cancel";
  deleteText="Delete";
  deleteStyle="bg-red-500 text-white";
  cancelStyle= "bg-gray-300 text-white";

}
