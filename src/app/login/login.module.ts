import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule} from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import {PanelModule} from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { LoginComponent } from './login.component';
import { FormsModule} from '@angular/forms';
import { JwtInterceptor } from '../interceptor/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';





@NgModule({
  declarations: [
    // [LoginComponent]
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ButtonModule,
    RouterModule,
    MenuModule,
    MenubarModule,
    ToolbarModule,
    PanelModule,
    PasswordModule,
    InputTextModule,
    TableModule,
    PaginatorModule,
    FormsModule,
    BrowserModule,
    RouterLink
    
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  }
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }