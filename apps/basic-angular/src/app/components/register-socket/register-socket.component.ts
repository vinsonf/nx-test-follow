import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'nx-test-follow-register-socket',
  templateUrl: './register-socket.component.html',
  styleUrls: ['./register-socket.component.scss']
})
export class RegisterSocketComponent  {

  constructor(private socketService: SocketService) { }



  register(event: {username: string; password: string}) {
    console.log('register presentation socket', event);
    this.socketService.emit('register', event);

  }
}
