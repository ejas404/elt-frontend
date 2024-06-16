import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) {}

  connectServer(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('connect', () => {
        console.log('Socket connected');
        observer.next({ status: 'connected' });
      });

      this.socket.on('connect_error', (error: any) => {
        console.error('Socket connection error', error);
        observer.error(error);
      });

      this.socket.on('disconnect', (reason: string) => {
        console.log('Socket disconnected:', reason);
        observer.complete();
      });
    });
  }

  disconnect() {
    this.socket.disconnect();
  }
}