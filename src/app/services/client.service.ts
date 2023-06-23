import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ClientList, ClientProfile, shortClientList} from "../shared/interfaces";
import {Observable} from "rxjs";
import {AuthService} from "./authentification.service";

@Injectable()

export class ClientService{
  constructor(private http: HttpClient, private token: AuthService){
  }

  public getClientList(): Observable<shortClientList[]>{
    const token = this.token.getAccessToken()
    return this.http.get<shortClientList[]>('https://heavensite.herokuapp.com/users/client_list/', {headers: {"Authorization": `Token ${token}`}})
  }

  public getClientProfile(id: number): Observable<ClientProfile>{
    const token = this.token.getAccessToken()
    return this.http.get<ClientProfile>(`https://heavensite.herokuapp.com/users/client_api/${id}/`, {headers: {"Authorization": `Token ${token}`}})
  }



}

