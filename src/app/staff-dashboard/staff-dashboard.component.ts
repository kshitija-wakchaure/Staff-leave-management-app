import { Component } from '@angular/core';
import { HttpServiceService } from '../shared/http-service.service';
import { MatDialog } from '@angular/material/dialog';
import { LeaveApplyFormComponent } from '../leave-apply-form/leave-apply-form.component';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent {

  leaves: any[] = [];
  updatelist: any = [];
  detaillist: any = [];
  Totalleave: any = 10;
  Approvedleave: any = this.httpServe.sum;
  RejectedLeave: any = this.httpServe.sub;

  constructor(private httpServe: HttpServiceService, private matDialog: MatDialog) { }

  ApplyNewLeave() {
    this.matDialog.open(LeaveApplyFormComponent, {
      width: '350px',
    })
  }

  ngOnInit(): void {
    this.httpServe.getLeave().subscribe((param: any) => {
      let arr = [];
      for (let data of param) {
        if (data.username == this.httpServe.username) {
          arr.push(data);
          this.updatelist = arr;
          console.log(this.updatelist)
        }
      }
    })

    this.httpServe.addStaffLeaveCard.subscribe((param: any) => {
      this.updatelist.push(param)
      console.log(this.updatelist)
    })

    this.httpServe.getUsers().subscribe((param: any): void => {
      for (let para of param) {
        if (para.email === this.httpServe.username) {
          this.detaillist.push(para)
        }
      }
    })

    console.log(this.detaillist)
  }

}
