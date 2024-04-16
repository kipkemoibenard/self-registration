import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { UserpageComponent } from './userpage.component';


// const routes: Routes = [
//   {path:':id', component:UserpageComponent},
 
// ];

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserpageComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRoles: ['users'],
        },
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
