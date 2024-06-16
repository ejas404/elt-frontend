import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetailsTableModel } from '../../interfaces/table.interface';
import { environment } from '../../../../environments/environment.development';
import { ResponseMessage } from '../../interfaces/chat.interface';
import { UserModule } from '../../../modules/user/user.module';

@Injectable()
export class UserProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getUserList() {
    return this.http.get<UserDetailsTableModel[]>(`${environment.API_URL}/user/get-users`)
  }

  getOldChats(id : string){
    return this.http.get<ResponseMessage[]>(`${environment.API_URL}/user/old-chats/${id}`)
  }
}
