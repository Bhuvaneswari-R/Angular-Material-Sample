import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { AppService } from '../app.service';
import { makeBindingParser } from '@angular/compiler';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

export interface Country {
  value: string;
  viewValue: string;
}

export interface MarkSheet {
  position: number;
  subject: string;
  score: number;
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

  countries: Country[] = [    
    { value: 'Afghanistan', viewValue: 'Afghanistan' },
    { value: 'Belgium', viewValue: 'Belgium' },
    { value: 'Canada', viewValue: 'Canada' },
    { value: 'Denmark', viewValue: 'Denmark' },
    { value: 'Egypt', viewValue: 'Egypt' },
    { value: 'France', viewValue: 'France' },
    { value: 'Germany', viewValue: 'Germany' },
    { value: 'Hawaii', viewValue: 'Hawaii' },
    { value: 'India', viewValue: 'India' },
    { value: 'Japan', viewValue: 'Japan' },
    { value: 'Kuwait', viewValue: 'Kuwait' },
    { value: 'Liberia', viewValue: 'Liberia' },
    { value: 'Malaysia', viewValue: 'Malaysia' },
    { value: 'Nepal', viewValue: 'Nepal' },
    { value: 'Oman', viewValue: 'Oman' }
  ];

  displayedColumns: string[] = ['subject', 'score'];
  
  loading = false;

  marks: MarkSheet[] = [
    {position: 1, subject: "Tamil", score: 82},
    {position: 1, subject: "English", score: 75},
    {position: 1, subject: "Maths", score: 100},
    {position: 1, subject: "Science", score: 87},
    {position: 1, subject: "Social", score: 80}
  ];

  dataSource = this.marks;

  matDatepicker: Date;

  allComplete: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.maxDate = new Date();
  }
  onClickSubmit(){    
    this.loading = true;
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