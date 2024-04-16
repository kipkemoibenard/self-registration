import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpageRoutingModule} from './adminpage-routing.module';

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
import { AdminpageComponent } from './adminpage.component';



@NgModule({
  declarations: [
    //  [AdminpageComponent]
  ],
  imports: [
    CommonModule,
    AdminpageRoutingModule,
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
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AdminpageComponent]
})
export class AdminpageModule { }
