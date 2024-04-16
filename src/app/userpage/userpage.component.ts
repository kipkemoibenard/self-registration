
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Todo } from '../todo/todo';
import { TableModule } from 'primeng/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  public userDetails: Todo | undefined;
  userId!: number;
  loggedUser: Todo | undefined;
  // loggedUser=null;
  username: Todo[]=[];
  firstname: string | undefined;
  lastname: string | undefined;
  role: string | undefined;




  constructor(private service: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    // this.usersPresent()

    id: Number
  username: String
  firstname: String
  lastname:String
  role: String
  }
  loginForm = new FormGroup({
    username: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    role: new FormControl(''),
  });

  ngOnInit(): void {
    // @ts-ignore
    this.userId = +this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.userId);

    this.usersPresent();
  }
  usersPresent() {
    this.service.getByCode(this.userId).subscribe((res:Todo) => {

      // this.loggedUser = Object.values(res);
      this.loggedUser=res;
      console.log(res);


      
      
      // this.loginForm.setValue({
      //   id: this.loggedUser.id, username: this.loggedUser.username, firstname: this.loggedUser.firstname,
      //   lastname: this.loggedUser.lastname, role: this.loggedUser.role
      // });


    })


  }

  onClick() {
    this.router.navigate(['login'])
  }
}
