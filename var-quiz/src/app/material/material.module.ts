import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggle, MatButtonToggleModule} from '@angular/material/button-toggle';


const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
