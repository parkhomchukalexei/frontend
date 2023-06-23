import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../shared/interfaces";
import {Token} from "../main-components/header/interfaces/header-item.interface";


@Injectable()

export class AuthService {
  constructor(private http: HttpClient) {
  }

  public login(user: User): Observable<any> {
    return this.http.post<Token>('https://heavensite.herokuapp.com/api/token/', user)
      .pipe(
        tap(
          (token: Token) => {
            localStorage.setItem('access-token', token.access)
            localStorage.setItem('refresh-token', token.refresh)
            const expDate = new Date(new Date().getTime() + 60 * 4000)
            localStorage.setItem('exp-date', expDate.toString())
          }
        )
      )
  }

  public logout() {
    localStorage.clear()
  }

  public getAccessToken() {
    // @ts-ignore
    const expDate = new Date(localStorage.getItem('exp-date'))
    if (new Date() > expDate) {
      this.http.post<Token>('https://heavensite.herokuapp.com/api/token/refresh/', {refresh: localStorage.getItem('refresh-token')}).subscribe(
        (string) => {
          localStorage.setItem('access-token', string.access)
          localStorage.setItem('exp-date', new Date(new Date().getTime() + 60 * 4000).toString())
        }
        )
      return localStorage.getItem('access-token')
    } else
      return localStorage.getItem('access-token')
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('refresh-token')
  }

}
