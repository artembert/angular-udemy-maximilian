import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Server-name';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 1000);
  }

  ngOnInit() {
  }
  onCreateServer(): void {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
