import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "../services/authentification.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {


  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.auth.getRefreshToken()
    if (this.auth.isAuthenticated()){
      console.log('ya zashel suda i 4e?')
      req = req.clone({
        setParams:{
          // auth: token,
        }
      })
    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('Interceptor Error', error)
          if (error.status === 401) {
            this.auth.logout()
          //   tut nado login
          }
          return throwError(error)
        })
      )

    }
}
