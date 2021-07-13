import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component implements OnInit {
  form: FormGroup;

  get taskList(): FormArray {
    return this.form.get('taskList') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      newTaskTitle: '',
      taskList: this.fb.array([
        this.newTask(),
      ]),
    });
  }

  addTask(): void {
  }

  removeTask(idx: number): void {
  }

  newTask(): FormGroup {
    return this.fb.group({
      title: 'some new task',
    });
  }
}
