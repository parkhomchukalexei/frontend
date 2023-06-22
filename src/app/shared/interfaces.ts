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
  operator: {}
  client: {}
}

export interface shortClientList{
  full_name: string;
  id: number;
  photo: string;
}

export interface ClientList{
  client: shortClientList[]
}

export interface ClientProfile{
    "id": number;
    "full_name": string;
    "name": string;
    "surname": string,
    "country": string | null,
    "login_of": string | null,
    "password_of": string | null,
    "of_email": string | null,
    "of_password_email": string | null,
    "paid_account": boolean,
    "login_of_paid_account": string | null,
    "password_of_paid_account": string | null,
    "email_of_paid_account": string | null,
    "password_of_email_paid_account": string | null,
    "photo": string | null,
    "telegram_photos_link": string | null,
    "managers": []
}
