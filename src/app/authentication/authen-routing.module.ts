import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

const routes: Routes = [
  { path: 'forgot-password', component: ForgotPassComponent },
  { path: 'personal', component: PersonalComponent },
];

@NgModule({
  imports: [RouterModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenRoutingModule {}
