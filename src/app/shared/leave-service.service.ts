import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { leave } from './leave-model/leave.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveServiceService {

  private detailList: leave[] = []

  staffLeaveUrl = 'https://staff-leave-management-d3511-default-rtdb.asia-southeast1.firebasedatabase.app/leave.json';

  constructor(private httpServe: HttpClient) { }

  leavelistobs = new BehaviorSubject(this.detailList.slice());

  updatelist(int: any) {
     this.detailList.push(int);
     this.leavelistobs.next(this.detailList.slice());
     console.log(this.detailList)
  }

  postLeave(objdtf: any) {
     return this.httpServe.post(this.staffLeaveUrl, objdtf)

  }

  getLeave() {
     return this.httpServe.get(this.staffLeaveUrl).pipe(map((rawdata: any) => {
        console.log(rawdata)
        let arr = [];
        for (let user in rawdata) {
           arr.push({ ...rawdata[user], user })
        }
        return arr;

     }))


  }


} 
