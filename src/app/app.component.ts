import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular1';
  name="";
  constructor(private user:UsersService)
  {
    console.warn(this.user.getData())
    let data=this.user.getData();
    this.name=data.name
  }

  da="Saiful"
}
