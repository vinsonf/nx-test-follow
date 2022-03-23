import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nx-test-follow-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  @Output() public oRegister = new EventEmitter<{username: string; password: string}>();

  username = 'my username';
  password = '';

  register() {
    console.log('register presentation', this.username, this.password);
    this.oRegister.emit({username: this.username, password: this.password});
  }

}
