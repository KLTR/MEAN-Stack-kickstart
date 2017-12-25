import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Define a users property to hold our user data
  alerts: any;
  
    // Create an instance of the DataService through dependency injection
    constructor(private dataService: DataService) {
      this.dataService.getAlerts()
      .subscribe(res => {this.alerts = res,console.log(res)});
  }

}
