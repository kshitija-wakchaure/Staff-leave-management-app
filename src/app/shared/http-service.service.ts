import { Injectable } from '@angular/core';
import { Subject, map, tap } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  fullname: any;
  username: any;
  approvedleave: number[] = [0, ];
  rejectedleave: any[] = [0,];
  sum: number | null = null;
  sub: number | null = null;
  authResponce: any;
  addStaffLeaveCard = new Subject()

  constructor(private http: HttpClient) { }

  userUrl = "https://staff-leave-management-d3511-default-rtdb.asia-southeast1.firebasedatabase.app/user-data.json";

  staffLeaveUrl = "https://staff-leave-management-d3511-default-rtdb.asia-southeast1.firebasedatabase.app/leave.json";
  

  addCalculatedLeave() {
      this.sum = this.approvedleave.reduce((acc, curr) => acc + curr, 0);
  }

  subCalculatedLeave() {
      this.sub = this.rejectedleave.reduce((acc, curr) => acc + curr, 0);
  }

  postUser(userObject: any) {
      return this.http.post(this.userUrl, userObject)
  }

  getUsers() {
      return this.http.get(this.userUrl).pipe(map((rawdata: any) => {
          let arr = [];

          for (let user in rawdata) {
              arr.push({ ...rawdata[user], user })
          }
          return arr
      }))
  }

  postLeave(userObject: any) {
      return this.http.post(this.staffLeaveUrl, userObject)
  }

  getLeave() {
      return this.http.get(this.staffLeaveUrl).pipe(map((db: any) => {
          let arr = [];
          for (let leave in db) {
              arr.push({ ...db[leave], id: leave })
          }
          return arr
      }))
  }

  signUpNewUser(info: any) {
      let payload = {
          email: info.userName,
          password: info.password,
          returnSecureToken: true
      }
      return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdpLV8Ek7ZbfQisWO1Z7ytDOE3d6bTM64', payload)
  }

  signInCurrentUser(info: any) {
      let payload = {
          email: info.userName,
          password: info.password,
          returnSecureToken: true
      }
      return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdpLV8Ek7ZbfQisWO1Z7ytDOE3d6bTM64', payload).pipe(tap((data: any) => {
          this.authResponce = data
      }))
  }

  patchLeaveStatus(statusDetails: any, leaveObj : any){
      return this.http.patch(`https://staff-leave-management-d3511-default-rtdb.asia-southeast1.firebasedatabase.app/leave/${statusDetails}.json`, leaveObj)
  }

  patchStatusResp(statusDetails2 : any, status : any){
      return this.http.patch(`https://staff-leave-management-d3511-default-rtdb.asia-southeast1.firebasedatabase.app/user-data/${statusDetails2}.json`,status)
  }
}