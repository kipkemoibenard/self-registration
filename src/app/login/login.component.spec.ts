// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
// function beforeEach(arg0: () => Promise<void>) {
//   throw new Error('Function not implemented.');
// }

import { LoginComponent } from "./login.component";
import { FormBuilder } from "@angular/forms";
describe('LoginComponent', () => {
  let fixture: LoginComponent;
  let authServiceMock: any;
  let formBuilderMock: FormBuilder
  let routerMock: any
  let httpMock:any
  let toastrMock:any

  beforeEach(() => {
    authServiceMock = {
      login: jest.fn()
    };
    formBuilderMock = new FormBuilder();
    routerMock = jest.fn();
    fixture = new LoginComponent(
      formBuilderMock,
      authServiceMock,
      routerMock,
      httpMock,
      toastrMock
    );
    fixture.ngOnInit();
  });
  describe('Test:ngOnInit', () => {
it("should initialize loginForm", ()=>{
const loginForm={
  username: '',
  password:''
};
expect(fixture.loginForm.value).toEqual(loginForm);
});
  });

  describe('Test loginForm',()=>{
    fixture.loginForm.controls.username.setValue('');
    fixture.loginForm.controls.password.setValue('');
    expect(fixture.loginForm.valid).toBeFalsy();
  });

});
