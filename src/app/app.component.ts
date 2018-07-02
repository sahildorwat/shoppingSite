import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: boolean;

  onStatusHandler(thisStatus: boolean) {
    this.status = thisStatus;
  }
}
