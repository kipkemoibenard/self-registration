import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private service: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const  token=this.service.getToken();
    // if(token){ 
    //   const requestWithToken=request.clone({
    //     headers:new HttpHeaders({
    //       Authorization:`Bearer + ${token}`,
    //       'Content-Type':'application/json', 
    //     }),
    //   });
    //   return next.handle(requestWithToken)
    // }
    // return next.handle(request);

    // below is another logic

    // const idToken= localStorage.getItem("id_token");
    // if(idToken){
    //   const cloned=req.clone({
    //     headers:req.headers.set("Authorization", "Bearer"+idToken)
    //   });
    //   next.handle(cloned);

    // }else{
    //   return next.handle(request);
    // }
    // const token="my_tokeneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjExMTF9.GCozCl6eZhoWtykQ6W1NX06h3WeZwpqZByyg3-zJ4q4";
    const token = localStorage.getItem("token")
    if (token) {
      console.log('token very present')
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer${token}`),

      });
      return next.handle(cloned).pipe(
        catchError((err: HttpErrorResponse) => {  
          if (err.status === 401) {

          }
          return throwError(() => new Error('ERROR'));

        })
      );

    }

    else {
      return next.handle(request)
    }





    return next.handle(request);
  }
}
