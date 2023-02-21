import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent {
  button = 'submit';
  save = faFloppyDisk;
  saveText = 'Add task';
  constructor(private formBuilder: FormBuilder) {}
  taskStatus = [
    {
      value: 1,
      name: 'Pending',
    },
    {
      value: 2,
      name: 'Done',
    },
  ];
  defaultStatus = this.taskStatus[0].value;
  test = 2;
  taskForm = this.formBuilder.group({
    task: ['', Validators.required],
    status: ['', Validators.required],
  });

  handleSubmit() {
    console.log("object", this.taskForm.value);
    this.taskForm.reset();
  }
  ngOnInit() {
    this.taskForm.valueChanges.subscribe((form) => {
     // console.log(form);
    });
  }
}
