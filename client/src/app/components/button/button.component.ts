import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() content: any;
  @Input() button!: string;
  @Input() style!: string;
  @Input() text?: string;
}
