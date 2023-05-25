export interface User {
  username: string
  password: string
}



export interface OnlyFansTable {
  id: number
  clientSurname?: string
  clientName?: string
  tableType?: boolean
  tabledata_set: OnlyFansData[]
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
