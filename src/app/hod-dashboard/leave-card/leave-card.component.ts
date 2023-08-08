import { Component, Input } from '@angular/core';
import { HttpServiceService } from 'src/app/shared/http-service.service';

@Component({
  selector: 'app-leave-card',
  templateUrl: './leave-card.component.html',
  styleUrls: ['./leave-card.component.css']
})
export class LeaveCardComponent {

  @Input() details: any;
  @Input() ind: any;

  updatelist: any = [];

  constructor(private httpserve: HttpServiceService) { }

  isApproved: boolean | any;
  exist: boolean = false;

  ngOnInit(): void {
  }

  OnApprove(det: any, detl: any) {
    this.httpserve.patchLeaveStatus((det.user), { status: "approved" }).subscribe((param: any) => {
      console.log(param);
      this.details.status = "approved"
    });

    this.isApproved = true;
    this.exist = true;
    this.httpserve.approvedleave.push(detl);
    this.httpserve.addCalculatedLeave();
    let id: any;

    this.httpserve.getUsers().subscribe((paramst: any) => {
      console.log(paramst)
      console.log(paramst.user)
      for (let para of paramst) {
        if (para.email == det.username) {
          console.log(para.user)
          id = para.user;
          console.log(id);
        }
      }

      this.httpserve.patchStatusResp((id), { approvedleave: detl }).subscribe((param: any) => {
        console.log(param)
      });

    })

  }

  Onreject(det: any, detl: any) {
    this.httpserve.patchLeaveStatus((det.user), { status: "rejected" }).subscribe((param: any) => {
      console.log(param);
      this.details.status = "rejected"
    });
    this.isApproved = false;
    this.exist = true;
    this.httpserve.rejectedleave.push(detl);
    this.httpserve.subCalculatedLeave();
    let id: any;

    this.httpserve.getUsers().subscribe((paramst: any) => {
      console.log(paramst)
      console.log(paramst.user)
      for (let para of paramst) {
        if (para.email == det.username) {
          console.log(para.user)
          id = para.user;
        }
      }

      this.httpserve.patchStatusResp((id), { rejectedleave: detl }).subscribe((param: any) => {
        console.log(param)
      });
    })
  }
}

