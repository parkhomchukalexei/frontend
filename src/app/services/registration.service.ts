import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegistrationData} from "../shared/interfaces";
import {Observable, Subscription, tap} from "rxjs";

@Injectable()


export class RegistrationService{

  constructor(private http: HttpClient){
  }

  public register(data: RegistrationData): Subscription{
    return this.http.post<Subscription>('http://127.0.0.1:8000/users/registration/register/', data).subscribe()

  }

}
