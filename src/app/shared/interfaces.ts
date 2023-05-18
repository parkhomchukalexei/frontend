export interface User {
  username: string
  password: string
}



export interface OnlyFansTable {
  id: number
  clientSurname?: string
  clientName?: string
  tableType?: boolean
  tableDataSet: OnlyFansData[]
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

export interface RegistrationData{
  password: string
  username: string
  first_name: string
  last_name: string
  email: string
  password_confirm: string
}
