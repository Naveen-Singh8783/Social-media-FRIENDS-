import { Component, OnInit } from '@angular/core';


import { userlist } from '../user/userlist.module';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  new_email: string='';
  user_password: string='';
  new_user: userlist[] = [
    new userlist('n.sneekumbh7742@gmail.com', 'nik'),
  ];


  constructor() { }

  ngOnInit() {
  }

  Onsingup(U_Email: string,psd:string){
    localStorage.setItem('key1',U_Email);
    localStorage.setItem('key2',psd);
  }

  password(event: Event){
        this.user_password = (<HTMLInputElement>event.target).value;
  }

  EMail(event: Event){
      this.new_email= (<HTMLInputElement>event.target).value;
  }

}
