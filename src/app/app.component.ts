import { Component } from "@angular/core";
import { routes } from "./routes";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styles: []
})
export class AppComponent {
	public routes = routes;
	public navRoutes = routes.filter(r => r.data.navLabel);
}
