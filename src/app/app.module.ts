import { ErrorPipe } from './error.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPipe,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ErrorPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
