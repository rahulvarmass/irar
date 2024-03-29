import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div [ngClass]="{changeBackground: something}">AD is loading</div>`,
  styles: [
    ".r1 { color: red; text-align: center; }",
    ".fadeOut { visibility: hidden; opacity: 0; transition: visibility 2s, opacity 2s linear; }",
    ".changeBackground {background: lightcoral; display: flex; justify-content: cefnter; padding: 100px; }"

  ]
})
export class NotificationComponent implements OnInit {
  getSlogan() {
    return('Method not implemented.');
  }

  constructor() { }

  ngOnInit(): void {
  }

  displayNotification: boolean = false;
  something:boolean =true;

  closeNotification() {
    this.displayNotification = true;
  }
}
