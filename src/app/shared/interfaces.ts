export interface User {
  username: string
  password: string
}



export interface OnlyFansTable {
  id: number
  clientSurname?: string
  clientName?: string
  tableType: boolean
  tableDataSet : OnlyFansData[]
}

export interface OnlyFansData{
  id: number
  day: string
  data: number
}
