import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/interface/task';

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
  taskPriority = [
    {
      value: 1,
      name: 'High',
    },
    {
      value: 2,
      name: 'Medium',
    },
    {
      value: 3,
      name: 'Low',
    },
  ];
  defaultPriority = this.taskPriority[0].value;
  taskForm = this.formBuilder.group({
    task: ['', Validators.required],
    priority: [this.taskPriority[0].value, Validators.required],
  });
  @Output() addTaskEvent = new EventEmitter();

  handleSubmit() {
   
    let newTask= {...this.taskForm.value, createDate: new Date(), author: 'Shariar', status: false, id: Date.now().toString()}
    this.addTaskEvent.emit(newTask);
    this.taskForm.reset();
  }
  ngOnInit() {
    this.taskForm.valueChanges.subscribe((form) => {
      // console.log(form);
    });
  }
}
