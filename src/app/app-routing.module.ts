import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import {RegisterUserComponent} from './register-user/register-user.component';

const routes: Routes = [
  { path: '', component: RegisterUserComponent },
  {path: 'crypto', component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
