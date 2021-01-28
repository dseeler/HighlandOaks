import { Component, OnInit } from "@angular/core";

interface Announcement {
	date: string;
	title: string;
	html: string;
}

@Component({
	selector: "app-home",
	templateUrl: "home.component.html",
	styles: []
})
export class HomeComponent implements OnInit {
	public annoucements: Announcement[] = [
		{
			date: "1/10/21",
			title: `Highland Oaks Annual Homeowners’ Meeting
			Saturday, February 13, 2021 at 11:00 am
			Location: Zoom (Link will be emailed to you)
			`,
			html: `
			<p>
				Homeowners who wish to be nominated to serve in an open position on the Board are encouraged to submit a brief biographical outline to Association Management Advisory Group, Inc. by fax at 678-407-1125, email <a href="mailto:Admin@AssociationMgt.com">Admin@AssociationMgt.com</a>, or by mailing to the address above.
			</p>
			<p>
				All homeowners are encouraged to attend the Annual Meeting, which will be held via Zoom, due to
				Covid-19. If you are unable to attend, a proxy & ballot is available below, these can be returned by
				e-mail, <a href="mailto:Admin@AssociationMgt.com">Admin@AssociationMgt.com</a>, or fax, 678-407-1125, and must be returned by <strong>February 11,
				2021 at 5:00 PM.</strong>
			</p>
			<p>
				To receive the Zoom link, you must call, 678-407-1115, or email AMAG. If you have specific
				questions that you would like to have addressed during the meeting, please email your
				questions to AMAG by February 11, 2021 at 5:00PM.			
			</p>
			<p>
				This information as well as a proxy and ballot will be mailed to all homeowners on 1/12/21.
			</p>
			`
		},
		{
			date: "1/7/21",
			title: `Holiday Decoration Winners`,
			html: `
			<p>
				A big SHOUT OUT to all the people who decorated their homes for the holidays! The neighborhood looked so amazing! Again, there were so many to choose from!
			</p>
			<p>
				<strong>
					Best Inflatables - 1652 Branch Creek Cove<br />
					Best Lights - 927 Richmond Hill Drive<br />
					Best Overall - 1807 Richmond Hill Drive		
				</strong>
			</p>
			<p>
				Please enjoy all the pictures of the beautiful lights! We hope to continue with more fun and creative ways to bring our community together. Happy New Year to you all!
			</p>
			<p>More photos are available <a href="/Events/HolidayDecorations">under the Events tab.</a></p>
			<img src="/assets/images/holidaydecorations/image0.jpg" />
			<img src="/assets/images/holidaydecorations/image1.jpg" />
			<img src="/assets/images/holidaydecorations/image2.jpg" />
			`
		}
	];

	constructor() {}

	ngOnInit(): void {}
}
