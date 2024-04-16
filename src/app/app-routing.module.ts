import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'users', loadChildren: () => import('./userpage/userpage.module').then((m) => m.UserpageModule) },
  { path: 'admin', loadChildren: () => import('./adminpage/adminpage.module').then((m) => m.AdminpageModule) }
  // used with authGuard
  // { path: 'users', loadChildren: () => import('./userpage/userpage.module').then((m) => m.UserpageModule), canActivate: [AuthGuard] },
  // { path: 'admin', loadChildren: () => import('./adminpage/adminpage.module').then((m) => m.AdminpageModule), canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
