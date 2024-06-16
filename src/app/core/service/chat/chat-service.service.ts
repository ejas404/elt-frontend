import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, map } from 'rxjs';
import { ResponseMessage, SendMessageType } from '../../interfaces/chat.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private socket: Socket) { }

  connectServer() {
    this.socket.on('connect', (res: any) => { console.log('socket connected', res) })
  }

  sendMessage(data: SendMessageType) {
    this.socket.emit('message', data);
  }

  getMessage() : Observable<ResponseMessage> {
    return this.socket.fromEvent('reply')
  }
}
