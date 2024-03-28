import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styles: [".r1{color:red; text-align:center}"]
})
export class NotificationComponent implements OnInit {
getSlogan() {
return('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }
  same_image: string= '/assets/Text.svg';
  s: string= 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
  displayNotification: boolean= false;

  closeNotification(){
    this.displayNotification= true;
  }
}
