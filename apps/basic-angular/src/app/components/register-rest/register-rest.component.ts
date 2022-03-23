import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'nx-test-follow-register-rest',
  templateUrl: './register-rest.component.html',
  styleUrls: ['./register-rest.component.scss']
})
export class RegisterRestComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log('')
  }

  register(event: {username: string; password: string}) {
    console.log('register rest container', event)
    this.apiService.post<{username: string; password: string;}>('/register', event ).subscribe();
  }

}
