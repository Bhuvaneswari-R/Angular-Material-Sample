import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { AppService } from '../app.service';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
    'selector': 'app-registration',
    'templateUrl': 'registration.component.html'
})

export class RegistrationFormComponent {
  maxDate: Date;
    title = 'Registration Form';
  task: Task = {
    name: 'Preferences',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Sports', completed: false, color: 'primary'},
      {name: 'Music', completed: false, color: 'accent'},
      {name: 'Cooking', completed: false, color: 'warn'}
    ]
  };
  matDatepicker: Date;

  allComplete: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.maxDate = new Date();
  }
onSubmit(){
  this.appService.getFormDetails((response) => {
    console.log("Response Data: ", response);
  }, (error) => {

  });
}
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }
}