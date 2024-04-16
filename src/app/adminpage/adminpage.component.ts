import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {

  userDetails:any=[];
  user!:any;
  constructor(private service: AuthService, private router:Router) {
    this.usersPresent()
  }
  // OnInit():void{
  //   this.usersPresent()
  // }

  usersPresent(){
    this.service.getAll().subscribe(res => {
      
      this.userDetails=res;
    });

    
   
  }
  onClick() {
    this.router.navigate(['login'])
  }
  
}
