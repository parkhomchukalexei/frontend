import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./authentification.service";


@Injectable()
export class TableCellService{

  constructor(private http: HttpClient, private token: AuthService) {}

  public patch_table_cell(id:number, data:number){
    const token = this.token.getAccessToken()
    console.log(id, data)
    return this.http.patch(
      `https://heavensite.herokuapp.com/onlyfans/table_data/${id}/`, {data: data},{headers:{"Authorization":`Token ${token}`}}
    )
      .subscribe((data) => console.log(data)
      )

  }

  public create_new_table_cell(tableID: number, day: number, data: number){
    const token = this.token.getAccessToken()
    const cellData = {data: data, tableId: tableID, date: day}
    return this.http.post(
      `https://heavensite.herokuapp.com/onlyfans/table_data/`, cellData, {headers: {"Authorization":`Token ${token}`}}
    ).subscribe( (data) => data)
  }


}
