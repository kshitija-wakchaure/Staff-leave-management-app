import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';

const routes: Routes = [
  {path : "registration", component : RegistrationFormComponent},
  {path : "login-form", component : LoginFormComponent},
  {path : "staff-dashboard", component : StaffDashboardComponent},
  {path : "hod-dashboard", component : HodDashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
