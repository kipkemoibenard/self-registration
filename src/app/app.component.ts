import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rolebased';
//  constructor(private service: AuthService){
//   this.service.getAllU().subscribe();
//  }
}
