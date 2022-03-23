import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(
    private socket: Socket
  ) { }

  public getMessages() {
    return this.socket.fromEvent('message');
  }

  public emit(message: string, data: any) {
    this.socket.emit(message, data);
  }
}
