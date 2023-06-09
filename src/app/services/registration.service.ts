import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, Subscription, tap} from "rxjs";
import {IRegistrationForm} from "../components/registration/registration.component";
import {FormGroup} from "@angular/forms";

@Injectable()


export class RegistrationService{

  constructor(private http: HttpClient){
  }

  public register(data: IRegistrationForm): Observable<any>{
    return this.http.post('https://heavensite.herokuapp.com/users/registration/register/', data)
      .pipe(
        catchError(() => of(null))
      )
  }

}
