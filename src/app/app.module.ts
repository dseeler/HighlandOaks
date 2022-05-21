import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { HOADocumentsComponent } from "./hoadocuments/hoadocuments.component";
import { NewslettersComponent } from "./newsletters/newsletters.component";
import { PhotosComponent } from "./photos/photos.component";
import { CommitteesComponent } from "./committees/committees.component";
import { InformationComponent } from "./information/information.component";
import { EventsComponent } from "./events/events.component";
import { FooterComponent } from "./footer/footer.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HouseDecorationComponent } from "./events/housedecoration/housedecoration.component";
import { RepaintingComponent } from './events/repainting/repainting.component';
import { July4th2018Component } from './events/july4th2018/july4th2018.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EasterColoringContest2021Component } from './events/easter-coloring-contest2021/easter-coloring-contest2021.component';
import { MovieNight2021Component } from './events/movie-night2021/movie-night2021.component';
import { NewBranchTreeWayEntranceComponent } from './events/new-branch-tree-way-entrance/new-branch-tree-way-entrance.component';
import { HolidayDecorWinners2021Component } from "./events/holiday-decor-winners2021/holiday-decor-winners2021.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		HOADocumentsComponent,
		NewslettersComponent,
		PhotosComponent,
		CommitteesComponent,
		InformationComponent,
		EventsComponent,
		FooterComponent,
		GalleryComponent,
		HouseDecorationComponent,
		RepaintingComponent,
		July4th2018Component,
		CalendarComponent,
		EasterColoringContest2021Component,
		MovieNight2021Component,
		NewBranchTreeWayEntranceComponent,
		HolidayDecorWinners2021Component
	],
	imports: [BrowserModule, AppRoutingModule, NgbModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
