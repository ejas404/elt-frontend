import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { UserDetailsTableModel } from "../../interfaces/table.interface";

@Injectable({providedIn : "root"})
export class AdminDashboardService {
    constructor(
        private http: HttpClient,
    ) { 

        console.log('admin dahsboard servide loaded')
    }

    getUserList() {
        return this.http.get<UserDetailsTableModel[]>(`${environment.API_URL}/admin/users`)
    }
}