import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CommitteesComponent } from "./committees/committees.component";
import { EasterColoringContest2021Component } from "./events/easter-coloring-contest2021/easter-coloring-contest2021.component";
import { EventsComponent } from "./events/events.component";
import { HouseDecorationComponent } from "./events/housedecoration/housedecoration.component";
import { July4th2018Component } from "./events/july4th2018/july4th2018.component";
import { MovieNight2021Component } from "./events/movie-night2021/movie-night2021.component";
import { RepaintingComponent } from "./events/repainting/repainting.component";
import { HOADocumentsComponent } from "./hoadocuments/hoadocuments.component";
import { HomeComponent } from "./home/home.component";
import { InformationComponent } from "./information/information.component";
import { NewslettersComponent } from "./newsletters/newsletters.component";
import { PhotosComponent } from "./photos/photos.component";

export const routes: Routes = [
	{ path: "", component: HomeComponent, data: { navLabel: "Home" } },
	{ path: "About", component: AboutComponent, data: { navLabel: "About" } },
	{
		path: "HOADocuments",
		component: HOADocumentsComponent,
		data: { navLabel: "HOA Documents" }
	},
	{
		path: "Calendar",
		component: CalendarComponent,
		data: { navLabel: "Calendar" }
	},
	{
		path: "Newsletters",
		component: NewslettersComponent,
		data: { navLabel: "Newsletters" }
	},
	{
		path: "Photos",
		component: PhotosComponent,
		data: { navLabel: "Amenity Photos" }
	},
	{
		path: "Committees",
		component: CommitteesComponent,
		data: { navLabel: "Committees" }
	},
	{
		path: "Information",
		component: InformationComponent,
		data: { navLabel: "Information" }
	},
	{
		path: "Events",
		component: EventsComponent,
		data: { navLabel: "Events" }
	},
	{
		path: "Events/HolidayDecorations",
		component: HouseDecorationComponent,
		data: { navLabel: false }
	},
	{
		path: "Events/Repainting",
		component: RepaintingComponent,
		data: { navLabel: false }
	},
	{
		path: "Events/July4th2018",
		component: July4th2018Component,
		data: { navLabel: false }
	},
	{
		path: "Events/EasterColoringContest2021",
		component: EasterColoringContest2021Component,
		data: { navLabel: false }
	},
	{
		path: "Events/MovieNight2021",
		component: MovieNight2021Component,
		data: { navLabel: false }
	}
];
