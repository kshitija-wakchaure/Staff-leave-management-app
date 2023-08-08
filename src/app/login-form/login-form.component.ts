import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../shared/http-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  LoginForm: any | FormGroup;

  constructor(private fb: FormBuilder, private httpServe: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      userName: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    })
  }

  onSubmit() {
    this.httpServe.signInCurrentUser(this.LoginForm.value).subscribe((param : any)=>{
      console.log(param);

      this.httpServe.getUsers().subscribe((userdata : any)=>{

        let foundUser = false;

        for(let user of userdata){
          if(user.LogIn.userName === this.LoginForm.value.userName && user.LogIn.password === this.LoginForm.value.password && user.role === "HOD"){
            foundUser = true;
          this.router.navigate(['/hod-dashboard'])
          }
          if (user.LogIn.userName === this.LoginForm.value.userName && user.LogIn.password === this.LoginForm.value.password && user.role === "staff") {
            foundUser = true;
            this.router.navigate(['/staff-dashboard'])
            this.httpServe.fullname = user.fname + ' ' + user.lname;
            this.httpServe.username = user.LogIn.userName;
            return
          }
        }
        if (!foundUser) {
          alert('Invalid username or password. Please try again.');
        }
      })
      
    })

  }
}
