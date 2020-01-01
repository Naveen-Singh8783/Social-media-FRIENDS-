import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  loginmethodselected: string= 'login';

  onSelect(feature: string){
    this.loginmethodselected = feature;

  }

  constructor() { }

  ngOnInit() {
  }

}
