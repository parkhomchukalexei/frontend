import {FormControl} from "@angular/forms";

export interface User {
  username: string
  password: string
}



export interface OnlyFansTable extends TableDataCells{
  id: number;
  clientSurname: string;
  clientName: string;
  tableType: boolean;
  tabledata_set: OnlyFansData[];
}

export interface TableDataCells {
  [key: string]: CellWithData | string | boolean | OnlyFansData[] | number;
}

export interface CellWithData {
  data: number;
  id: number;
}

export interface OnlyFansData{
  id: number
  day: string
  data: number
}

export interface LoginData{
  login : string
  password : string
}


export interface CreateOnlyfansTable{
  month : FormControl<number>,
  client: FormControl<number>,
  operator: FormControl<number>,
  tableType: FormControl<boolean>,
}

export interface OperatorData{
  id: number
  username: string

}

export interface ClientData{
  id: number
  name: string
}


export interface Resp {
  client: {};
  operator: {}

}
