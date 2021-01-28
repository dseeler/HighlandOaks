import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-gallery",
	templateUrl: "./gallery.component.html",
	styles: []
})
export class GalleryComponent implements OnInit {
	@Input() folder: string = "";
	@Input() amount: number = 0;

	images: string[] = [];

	constructor() {
		console.log(this);
	}

	ngOnInit(): void {
		console.log(this);
		for (let i = 0; i < this.amount; i++) {
			this.images[i] = `assets/images/${this.folder}/image${i}.jpg`;
		}
	}
}
