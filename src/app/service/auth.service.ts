import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Todo } from '../todo/todo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiurl = "api/users";



  getAll() {
    let token='';
    let head_obj=new HttpHeaders().set("Authorization", "bearer"+token)
    return this.http.get(this.apiurl,{headers:head_obj});

  }
  getAllU() {

    return this.http.get(this.apiurl);

  }

  getByCode(id: number):Observable<Todo> {
    return this.http.get<Todo>(`${this.apiurl}/${id}`);

  }

  isLoggedIn() {
    return !!sessionStorage.getItem('token') 
  }
  GetUserRole() {
    return sessionStorage.getItem('role') != null ? sessionStorage.getItem('role')?.toString() : '';
  }

  onLogin(obj:any):Observable<any>{
    return this.http.post(this.apiurl, obj);
   
  }

  getToken(){
    return localStorage.getItem('token')
  }

  setToken(){
    return localStorage.setItem('token', 'Jwt Token')
  }

  removeToken(){
    return localStorage.removeItem('token')
  }

  getTodo(id:number):Observable<Todo>{
    return this.http.get<Todo>(`this.apiurl/${id}`
    );
  }



}
