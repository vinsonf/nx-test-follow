import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'nx-test-follow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'basic-angular';
  messages$ = this.socketService.getMessages();
  restTitle$ = this.apiService.get('/api');
  constructor(
    private socketService: SocketService,
    private apiService: ApiService,
    ){
  }
}
