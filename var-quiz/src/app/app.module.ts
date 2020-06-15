import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { TypographyMComponent } from './typography-m/typography-m.component';
import { ButtonMComponent } from './button-m/button-m.component';
import { ToggleButtonComponentComponent } from './toggle-button-component/toggle-button-component.component';
import { BadgesAndIconsComponent } from './badges-and-icons/badges-and-icons.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyMComponent,
    ButtonMComponent,
    ToggleButtonComponentComponent,
    BadgesAndIconsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
