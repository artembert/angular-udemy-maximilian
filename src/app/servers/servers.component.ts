import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 1000);
  }

  ngOnInit() {
  }

}
