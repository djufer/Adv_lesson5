import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson01Component } from './lesson01/lesson01.component';
import { Lesson02Component } from './lesson02/lesson02.component';
import { Lesson03Component } from './lesson03/lesson03.component';
import { EditBtnComponent } from './lesson03/edit-btn/edit-btn.component';
import { DeleteBtnComponent } from './lesson03/delete-btn/delete-btn.component';
import { Lesson04Component } from './lesson04/lesson04.component';
import { SearchPipe } from './lesson04/search.pipe';
import { EditContactBtnComponent } from './lesson04/edit-contact-btn/edit-contact-btn.component';
import { SortPipe } from './lesson04/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Lesson01Component,
    Lesson02Component,
    Lesson03Component,
    EditBtnComponent,
    DeleteBtnComponent,
    Lesson04Component,
    SearchPipe,
    EditContactBtnComponent,
    SortPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
