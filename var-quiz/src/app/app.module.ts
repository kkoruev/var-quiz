import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { TypographyMComponent } from './typography-m/typography-m.component';
import { ButtonMComponent } from './button-m/button-m.component';


@NgModule({
  declarations: [
    AppComponent,
    TypographyMComponent,
    ButtonMComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
