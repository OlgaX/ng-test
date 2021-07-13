import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Ex4FormComponent} from './ex4/ex4-form/ex4-form.component';

const routes: Routes = [
  {
    component: Ex4FormComponent,
    path: 'ex4-form',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
