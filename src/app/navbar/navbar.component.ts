import { Component, OnInit } from '@angular/core';
import { routes } from "../routes";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public routes = routes;
	public navRoutes = routes.filter(r => r.data.navLabel);
  public isMenuCollapsed = true;
}
