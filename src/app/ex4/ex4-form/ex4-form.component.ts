import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ex4-form',
  templateUrl: './ex4-form.component.html',
  styleUrls: ['./ex4-form.component.scss']
})
export class Ex4FormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  canDeactivate(): Observable<boolean> | boolean {
    return true;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
    });
  }

}
