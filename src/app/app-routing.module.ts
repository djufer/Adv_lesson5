import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './lesson05/home/home.component';
import { Lesson01Component } from './lesson01/lesson01.component';
import { Lesson02Component } from './lesson02/lesson02.component';
import { Lesson03Component } from './lesson03/lesson03.component';
import { WorksComponent } from './lesson05/works/works.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'works',
    component: WorksComponent,
    children: [
      { path: 'cenzor', component: Lesson01Component },
      { path: 'users', component: Lesson02Component },
      { path: 'tasks', component: Lesson03Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
