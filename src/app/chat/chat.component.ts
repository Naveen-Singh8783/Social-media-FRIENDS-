import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chat_box: boolean = false;
  msg:boolean=false;
  user_msg: string='';

  constructor() { }

  ngOnInit() {
  }

  open_chat(){
    this.chat_box = true;
  }

  msgsend(){
    this.msg=true;
  }

  messages(event: Event){
    this.user_msg = (<HTMLInputElement>event.target).value;
  }

}
