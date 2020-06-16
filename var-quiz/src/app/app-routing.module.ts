import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BadgesAndIconsComponent} from './badges-and-icons/badges-and-icons.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'badges-icons', component: BadgesAndIconsComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
