import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, RouterLink, withHashLocation } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo/todo';
import { Token } from '@angular/compiler';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  visible: boolean = false;
  registrationForm!: FormGroup
  constructor(private builder: FormBuilder, private toastr: ToastrService,
    public service: AuthService, private route: Router, private http: HttpClient) {
      this.service.getAllU().subscribe();
  
    // this.onLogin()
  }

  // loginObj: any = {
  //   username: '',
  //   password: ''
  // };

  showDialog() {
    this.visible = true;
}
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  todo: Todo = {
    id: 0,
    username: '',
    firstname: '',
    lastname: '',
    role: ''
  };

  getRegistrationForm() {
    this.registrationForm = this.builder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: [],
    })
  }

  getTodo() {
    this.service.getTodo(this.todo.id).subscribe((data) => (this.todo = data));
  }

  getToken() {
    this.service.getToken();
  }
  setToken() {
    this.service.setToken();
  }
  removeToken() {
    this.service.removeToken()
  }



  ngOnInit(): void {
   this.service.setToken();
   this.getRegistrationForm();


   }

   ngOnDestroy(): void {
     
   }

  onLogin() {
    this.http.get<any>("http://localhost:3000/api/users", {withCredentials: true}).subscribe(res => {
      const userdata = res.find((a: any) => {
        return a.username === this.loginForm.value.username &&
          a.password === this.loginForm.value.password


          
        

      });
      if (userdata) {
        localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkFETUlOIiwiaWF0IjoxMTExfQ.O5IaIYiJ3Fh_X7c7-2DkuE24a6IZtEG2_0hMkL4kj_0");
          localStorage.getItem('token')

        // this.toastr.success();
        if (userdata.role === 'admin' || userdata.role === 'ADMIN') {
          console.log('admin')
           this.toastr.success('Admin Login successfull')
            this.route.navigate(['admin'])
          //  used with authGuard
          // if(localStorage.getItem!==null){
          //   this.toastr.success('Admin Login successfull')
          //   this.route.navigate(['admin'])
          // }
          // else{
          //   this.toastr.success('Admin Login first')
          //   this.route.navigate(['login'])
          // }
          
         
        } else {

          this.toastr.success('User Login successfull');
          // console.log(this.route.navigate([`'http://localhost:3000/users'/${userdata.id}`]))
          this.route.navigate([`/users/${userdata.id}`]);
          console.log("user role is ", userdata.role + " user id is " + userdata.id)
          localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IlVTRVIiLCJpYXQiOjEyMzR9.I_bvqxD4MpO99J1arja1EWbxpZitTDM3Yowjz2ylRZA")
        
        



        }

      }
      else {
        this.toastr.warning('Wrong user details')
      }

    })
    // debugger
    // this.service.onLogin(this.loginForm.value.username && this.loginForm.value.password).subscribe((res: any) => {
    //   console.log('res', res)
    //   localStorage.setItem('token', res.token)
    // })

  }

  register(){
    const formDets =  this.registrationForm.value
    const regDetails = {
      "firstname": formDets.firstName,
      "lastname": formDets.lastName,
      "username": formDets.email,
      "role": "user",
      "password": formDets.password,
    }

    if(formDets.password !== formDets.confirmPassword){
      this.toastr.warning('Passowrd not matching')
      return
    }
    else{
      this.service.register(regDetails).subscribe((res) =>{
        this.toastr.success('Registered')
      })
    }
  
    
  }
}




function isLoggedIn() {
  throw new Error('Function not implemented.');
}

