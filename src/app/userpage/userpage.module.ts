import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpageRoutingModule} from './userpage-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
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
import { UserpageComponent } from './userpage.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    //  [userpageComponent]
  ],
  imports: [
    CommonModule,
    UserpageRoutingModule,
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
    RouterModule 
  ],
  providers: [],
  bootstrap: [UserpageComponent]
})
export class UserpageModule { }
