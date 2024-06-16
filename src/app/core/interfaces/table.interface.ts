import { UserDataResponse } from "./auth.interface"

export type TableHeaderModel = {
    title : string,
    tBodyKey : string 
}




export interface UserDetailsTableModel {
    userId : string
    fullName : string
    [tBodyKey : string] : string | undefined | null | boolean
}
