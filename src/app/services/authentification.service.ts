import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../shared/interfaces";
import {Token} from "../main-components/header/interfaces/header-item.interface";


@Injectable()

export class AuthService {

  public accessToken: string
  public refreshToken: string


  constructor(private http: HttpClient) {
  }

  public login(user: User): Observable<any> {
    console.log(user)
    return this.http.post<Token>('http://127.0.0.1:8000/api/token/', user)
      .pipe(
        tap(
          (token: Token) => {
            localStorage.setItem('access-token', token.access)
            localStorage.setItem('refresh-token', token.refresh)
            console.log(token)
            this.setToken(token)
          }
        )
      )
  }

  public logout() {
    this.setToken({'refresh':'', 'access': ''})
    localStorage.clear()
  }

  private setToken(token: Token) {
    this.accessToken = token.access
  }


  public getAccessToken(): string|null {
    return localStorage.getItem('access-token')
  }

  public getRefreshToken(): string{
    return this.refreshToken
  }
  public isAuthenticated(): boolean {
    return !!localStorage.getItem('access-token')
  }

}
