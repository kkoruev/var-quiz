import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BadgesAndIconsComponent} from './badges-and-icons/badges-and-icons.component';

const routes: Routes = [
  {path: 'badges-icons', component: BadgesAndIconsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
