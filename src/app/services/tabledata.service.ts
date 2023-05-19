import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {AuthService} from "./authentification.service";
import {OnlyFansTable} from "../shared/interfaces";

@Injectable()
export class TableDataService {

  constructor(private http: HttpClient, private token: AuthService) {
  }

  public get_table_data(){
    const token = this.token.getAccessToken()
    return this.http.get<OnlyFansTable>('http://127.0.0.1:8000/onlyfans/table_view/?page=1', {headers: {"Authorization":`Token ${token}`}})
  }
}


@Injectable()
export class TableCellService{

  constructor(private http: HttpClient, private token: AuthService) {}

  public patch_table_cell(id:number, data:number){
    const token = this.token.getAccessToken()
    return this.http.patch(
      `http://127.0.0.1:8000/onlyfans/table_data/${id}/`, {data: data},{headers:{"Authorization":`Token ${token}`}}
    )
      .subscribe((data) => console.log(data)
      )

  }

  public create_new_table_cell(tableID: number, day: number, data: number){
    const token = this.token.getAccessToken()
    const cellData = {data: data, tableId: tableID, date: day}
    return this.http.post(
      `http://127.0.0.1:8000/onlyfans/table_data/`, cellData, {headers: {"Authorization":`Token ${token}`}}
    ).subscribe( (data) => console.log(data))
  }


}
