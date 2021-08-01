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
			date: "7/2/21",
			title: `Reminder for Independence Day Celebrations`,
			html: `
			<p>
				In order to keep fireworks debris out of the pool and the tennis area, and to avoid any fire hazard to our buildings please DO NOT use any fireworks in the common areas around the pool and tennis area, or in the parking lot. Fireworks in those areas are prohibited. 
			</p>
			<p>
				Thank you for your cooperation.
			</p>
			`
		},
		{
			date: "5/2/21",
			title: `POA Presentation`,
			html: `
			<p>
				We have added the POA information documents to the documents tab. Please email AMAG at <a href="mailto:admin@associationmgt.com">admin@associationmgt.com</a> if you have any questions.
				<br />
				Thank you!
			</p>
			`
		},
		{
			date: "4/28/21",
			title: `POA Informational Meeting`,
			html: `
			<p>
				Dear Highland Oaks Residents,
			</p>
			<p>
				Our POA informational meeting is this Saturday, May 1, at 10:00am. Please review the Amendments and Consent form under the documents tab. If you have any questions that you would like addressed during the meeting, please email them to <a href="mailto:admin@associationmgt.com">admin@associationmgt.com</a>. The link for the zoom meeting is below. We hope to see you then. 
			</p>
			<p>
				<a href="https://us02web.zoom.us/j/88446642137?pwd=YXhSNnBpbzFFOFVwaDdycWxDTUN6UT09">https://us02web.zoom.us/j/88446642137?pwd=YXhSNnBpbzFFOFVwaDdycWxDTUN6UT09</a>
			</p>
			`
		},
		{
			date: "3/25/21",
			title: `Updated Forms are available`,
			html: `
			<p>
				Dear Neighbors,
			</p>
			<p>
				Happy Spring! Now that the weather is warmer, many residents are making changes to the exterior of their homes. Please remember that ANY exterior change, such as painting, changing your landscaping, or adding a fence requires a Modification Request Form to be submitted to our Architectural Review Committee. For your convenience, the MRF is available under the documents tab. The very helpful ARC Guidelines and the Covenant Highlights are also available. Please review these documents as they have recently been updated.
			</p>
			<p>
				If you have any questions, please reach out to our AMAG (our management company) at <a href="mailto:admin@associationmgt.com">admin@associationmgt.com</a> or 678-407-1115.
			</p>
			<p>
				Thank you!
			</p>
			`
		},
		{
			date: "2/13/21",
			title: `HOA 2020 Recap`,
			html: `
			<p>
				Did you miss the annual meeting? If so, the slide presentation is available under the documents tab.
				The association will send out the POA and other amendment documentation at a later date. 
			</p>
			<p>
				Thank you again for attending the annual meeting.
			</p>
			`
		},
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
