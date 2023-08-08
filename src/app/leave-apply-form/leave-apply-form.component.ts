import { Component } from '@angular/core';
import { HttpServiceService } from '../shared/http-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { leave } from '../shared/leave-model/leave.model';

@Component({
  selector: 'app-leave-apply-form',
  templateUrl: './leave-apply-form.component.html',
  styleUrls: ['./leave-apply-form.component.css']
})
export class LeaveApplyFormComponent {
  
  LeaveForm: any |FormGroup;
  staff : any;
  sname : any ;
  status : any = 'pending' ;

  days: Number | null = null ;

  constructor(private httpServe : HttpServiceService, public dialog: MatDialogRef<LeaveApplyFormComponent>){ }

  ngOnInit(): void {

    this.LeaveForm = new FormGroup({
      from : new FormControl( '', Validators.required),
      To : new FormControl('', Validators.required),
      reason : new FormControl('',Validators.required),
    })
  }

  calculateDays() {
    
    const startDateObj = new Date(this.LeaveForm.value.from);
    const endDateObj = new Date(this.LeaveForm.value.To);
    const timeDiff = endDateObj.getTime() - startDateObj.getTime();
    this.days = Math.ceil(timeDiff / (1000 * 3600 * 24));

}

  onSubmit(){
    this.calculateDays()
    this.staff = new leave(this.httpServe.fullname, this.LeaveForm.value.from, this.LeaveForm.value.To, this.LeaveForm.value.reason, this.status, this.httpServe.username, this.days);
    this.httpServe.postLeave(this.staff).subscribe((param : any)=>{
      console.log(param);
      console.log(this.staff);
    });
    this.httpServe.addStaffLeaveCard.next(this.staff);
    this.dialog.close();
  }

}
