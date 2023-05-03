import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./authentification.service";
import {OnlyFansTable} from "../shared/interfaces";



// export interface Table {
//   id: string
//   client_name: string,
//   client_surname: string,
//   operator_name: string,
//   operator_surname: string,
//   tabledata_set?: object,
//   date: string,
//   table_type: boolean,
//   client: number,
//   operator: number,
//
// }



@Injectable()
export class TableDataService {

  constructor(private http: HttpClient, private token: AuthService) {
  }

  get_table_data(){
    const token = this.token.getAccessToken()
    return this.http.get<OnlyFansTable>('http://127.0.0.1:8000/onlyfans/table_view/?month=1', {headers: {"Authorization":`Token ${token}`}})
  }
}
