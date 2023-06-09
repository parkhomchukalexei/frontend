import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./authentification.service";
import {Observable} from "rxjs";
import {CreateOnlyfansTable, OnlyFansTable, Resp} from "../shared/interfaces";
import {ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";


@Injectable()
export class TableService {
  constructor(
    private http: HttpClient,
    private token: AuthService,
  ) {
  }


}

@Injectable()
export class TableDataService {

  constructor(private http: HttpClient, private token: AuthService) {
  }

  public get_table_data(month: number): Observable<OnlyFansTable[]> {
    const token = this.token.getAccessToken()
    return this.http.get<OnlyFansTable[]>(`https://heavensite.herokuapp.com/onlyfans/table_view/?month=${month}`, {headers: {"Authorization": `Token ${token}`}})
  }

  public createNewTable(data: ɵTypedOrUntyped<CreateOnlyfansTable, ɵFormGroupValue<CreateOnlyfansTable>, any>): Observable<OnlyFansTable> {
    const token = this.token.getAccessToken()
    return this.http.post<OnlyFansTable>('https://heavensite.herokuapp.com/onlyfans/table_view/', data, {headers: {"Authorization": `Token ${token}`}})
  }

  public getUserClientList(){
    const token = this.token.getAccessToken()
    return this.http.get<Resp>('https://heavensite.herokuapp.com/users/userinfo',{headers: {"Authorization": `Token ${token}`}})
  }

}


