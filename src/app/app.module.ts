import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { LeaveApplyFormComponent } from './leave-apply-form/leave-apply-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LeaveCardComponent } from './hod-dashboard/leave-card/leave-card.component';
import { HttpServiceService } from './shared/http-service.service';
import { LeaveServiceService } from './shared/leave-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StaffDashboardComponent,
    HodDashboardComponent,
    LeaveApplyFormComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    LeaveCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpServiceService,
    LeaveServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
