import { Component } from '@angular/core';
import { LeaveServiceService } from '../shared/leave-service.service';


@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.css']
})
export class HodDashboardComponent {
  
  infolist : any;
  constructor(private leaveserve : LeaveServiceService){

  }

  ngOnInit(): void {

    this.leaveserve.getLeave().subscribe((info : any)=>{
      console.log(info)
     this.infolist =  info; 
      console.log(this.infolist)
    })
  }

}
