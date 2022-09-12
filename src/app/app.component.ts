import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:
  `
  <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/pizzas'>Pizza List</a></li>
        </ul>
    </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle : string = `RAUDY'S PIZZA !`;
}
