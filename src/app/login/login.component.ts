import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  verified: boolean = false;
  u_id = localStorage.getItem('key1');
  u_pwd = localStorage.getItem('key2');
  email_id: string = '';
  pwd: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Email_id(event: Event){
       this.email_id = (<HTMLInputElement>event.target).value;
  }

  PASSWD(event: Event){
    this.pwd= (<HTMLInputElement>event.target).value;
  }

  verify(em:string, pd:string) {
    if (em === this.u_id && pd === this.u_pwd) {

      this.router.navigateByUrl("/Home");
    }
  }

}
