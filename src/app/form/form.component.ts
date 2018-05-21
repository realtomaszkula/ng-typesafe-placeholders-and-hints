import { Component } from '@angular/core';

type Label<T extends object> = { [key in keyof T]: string };
type PartialLabel<T extends object> = { [key in keyof Partial<T>]: string };

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-form',
  template: `
  <form>
    <input [(ngModel)]="login.username" name="username" [placeholder]="placeholders.username" />

    <input [(ngModel)]="login.password" name="password" [placeholder]="placeholders.password" />
    <div> {{ hints.password }} </div>
  </form>
  `,
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  login: LoginForm = {
    username: '',
    password: ''
  };

  placeholders: Label<LoginForm> = {
    username: 'Username',
    password: 'Password'
  };

  hints: PartialLabel<LoginForm> = {
    password: 'Must contain at least one special character'
  };
}
