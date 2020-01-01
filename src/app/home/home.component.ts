import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count: number=0;
  count1: number=0;
  pt_upload: boolean=false;
  post: string = '';
  comment: boolean = false;
  friend_request: boolean= false;
  friend_request1: boolean= false;
  friend_request2: boolean= false;
  friend_request3: boolean= false;
  pic_comment: string='';
  user_commnet = '';

  constructor() { }

  ngOnInit() {
  }

  onlike(){
    this.count= this.count + 1;
  }

  onlike1(){
    this.count1= this.count1 + 1;
  }

  oncomment(){
    this.comment= !this.comment;
  }

  oncomment2(){
    this.comment= !this.comment;
    this.user_commnet=this.pic_comment;
  }

  TheComment(event: Event){
      this.pic_comment = (<HTMLInputElement>event.target).value;
  }


  frnd_request(){
    this.friend_request = !this.friend_request;
  }
  frnd_request1(){
    this.friend_request1 = !this.friend_request1;
  }
  frnd_request2(){
    this.friend_request2 = !this.friend_request2;
  }
  frnd_request3(){
    this.friend_request3 = !this.friend_request3;
  }

  post_upload(event: Event){
    this.post = (<HTMLInputElement>event.target).value;
  }

  post_upload1(event: Event){
    this.pt_upload = true;
  }

}
