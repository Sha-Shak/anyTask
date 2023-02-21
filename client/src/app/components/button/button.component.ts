import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() content: any;
  @Input() buttonType!: any;
  @Input() style!: string;
  @Input() text?: string;
  @Input() disabled?: boolean;
  gray = 'bg-gray-300';
}
