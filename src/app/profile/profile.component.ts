import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  count: number=0;
  count1: number=0;
  pic_comment: string='';
  user_commnet = '';
  comment: boolean = false;

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

}
