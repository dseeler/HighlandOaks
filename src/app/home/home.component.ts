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
			date: "8/12/21",
			title: "Ridge Road Clean Up; Volunteers Needed",
			html: `
			<p>
			Hello neighbors;
			</p>
			<p>
			CLEANING NUMBER 3, Saturday August 14th.
			</p>
			<p>
			MARK THE NEXT ONE IN YOUR CALENDAR:
			</p>
			<p>
			<strong>November 13th</strong>
			</p>
			<p>
			If weather is not permitting the cleaning we will move the date by one week, please check the e-mail from the Association and the posting on the Facebook page.
			</p>
			<p>
			We will meet at the pavilion at 8 AM and pick up trash between Buford Drive and Azalea through the Gwinnett Clean & Beautiful’ s Adopt-a-Road Program. 
			You get to meet old and new neighbors, have a nice workout and keep Ridge Road look nice AND you can proudly say you did something for your neighborhood.
			</p>
			<p>
			If you are in High school you can earn some community service hours. Please make sure to bring your school’s form.
			</p>
			<p>
			Please note that due to the program guidelines, children under 12 are not permitted to participate for safety reasons.
			</p>
			<p>
			Please let me know if you can make it so we have enough supplies. Sign up by e-mail at <a href="mailto:guido.walther@alvetern.com">guido.walther@alvetern.com</a>  
			(we'll have bags and vests please make sure to wear sturdy shoes and bring a pair of gloves)
			</p>
			<p>
			We're looking forward seeing you again and would love to see new faces…
			</p>
			<p>
			Guido Walther
			</p>
			`
		},
		{
			date: "7/19/21",
			title: `Summer Movie Night`,
			html: `
			<p>
				Dear neighbors,<br />
				Join us in ending the summer with snow cones and movie night on the lawn! 
				The first 50 people get a FREE snow cone! 
				Bring a chair and a warm blanket to watch Disney’s Jungle Cruise (Rated PG-13). 
				There will be chalk to decorate the parking lot and bubbles while the snow cone truck is here! 			
			</p>
			<p>
				Snow Cone Truck time: 7-8PM
				Movie will promptly start at 8PM.
			</p>
			<p>
				Can’t wait to see everyone!<br />
				<strong>Highland Oaks Social Committee</strong>
			</p>
			<img src="assets/images/announcements/movienight.png" />
			`
		},
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
			date: "6/18/21",
			title: `Mailbox Violations Reminder`,
			html: `
			<p>
			Hello Homeowners,<br />
			Just an FYI that AMAG will begin looking for mailbox violations next month. We want to remind everyone of the deal that Southern Painting is offering to our residents. (See below that was in the Spring newsletter). This special price is being extended through the end of June. We need a minimum of 10 homeowners to book this service for them to send a painter here.<br />
			Thank you!
			</p>
			<p>
				Need mailbox parts? <a href="https://mymailboxorder.com/hghldoaks/?fbclid=IwAR14NS3pDDLXbOa9eGmjXz_S8O0eWFdg-w0v7RZEXlvVs639lAKzNndSkhM">https://mymailboxorder.com/hghldoaks/</a><br />
				Need brass numbers? <a href="https://addressesofdistinction.com/product/two-inch-williamsburg-brass-numbers/?fbclid=IwAR0a0kr_glIUa_R6IvfhNdykpEmBcAEttsOzzh6bLgpJGPchmf9VDNQNFx8">https://addressesofdistinction.com/.../two-inch.../</a><br />
				Southern Painting: <a href="http://www.southernpaintingllc.com/?fbclid=IwAR0f-EY_gJAwyFPHbSsu2Ffu9giTDnaIcBAbyzk4lLF5je9SB_Tw8NCyBZk">http://www.southernpaintingllc.com/</a> or 770-523-4470			
			</p>
			<p>
				May is mailbox maintenance month!
				If your mailbox needs painting, Southern Painting is offering a bulk rate discount to Highland Oaks
				homeowners. They will repaint your mailbox with flat spray paint for $35 (should be refreshed yearly) or for $60
				they will use an industrial enamel based paint that should last for 4 to 5 years.
				Please contact them at 770-523-4470 to schedule your service. This offer will expire on May 30th. If you choose
				to refresh your paint yourself, remember to use flat black spray paint.
			</p>
			`
		},
		{
			date: "5/14/21",
			title: `Pool Opening`,
			html: `
			<p>
				Dear Highland Oaks Residents,
			</p>
			<p>
				Welcome to the 2021 Pool Season! The pool will be opening tomorrow, May 15 at 10:00am. Please take a moment to review the attached rules. There are a few notable changes for this year:
			</p>
			<ul>
				<li>You are no longer required to sign-in</li>
				<li>We are no longer following the covid-19 restrictions from last season</li>
				<li>You are again allowed to have up to 5 guests</li>
				<li>Please maintain social distancing as others may not be comfortable and/or vaccinated</li>
				<li>Have fun and be safe!</li>
			</ul>
			<p>
				If you have any questions or an issue with your key card, please contact AMAG at <a href="mailto:admin@associationmgt.com">admin@associationmgt.com</a> or 678-407-1115.<br />
				Thank you,<br />
				The Highland Oaks Pool Committee
			</p>
			`
		},
		{
			date: "5/12/21",
			title: `Volunteers Needed`,
			html: `
			<p>
				Hello neighbors,
			</p>
			<img src="assets/images/announcements/adoptaroad.jpg" />
			<p>
				CLEANING NUMBER 2, Saturday May 15th. MARK THE NEXT ONES IN YOUR CALENDARS: 
			</p>
			<p>
				August 14th <br />
				November 13th
			</p>
			<p>
				If weather is not permitting the cleaning we will move the date by one week, please check the e-mail from the Association and the posting on the Facebook page.
			</p>
			<p>
				We will meet at the pavilion at 8 AM and pick up trash between Buford Drive and Azalea through the Gwinnett Clean & Beautiful’ s Adopt-a-Road Program. 
				You get to meet old and new neighbors, have a nice workout and keep Ridge Road look nice AND you can proudly say you did something for your neighborhood.
			</p>
			<p>
				If you are in High school you can earn some community service hours. Please make sure to bring your school’s form.
			</p>
			<p>
				Please note that due to the program guidelines, children under 12 are not permitted to participate for safety reasons.
			</p>
			<p>
				Please let me know if you can make it so we have enough supplies. Sign up by e-mail at <a href="mailto:guido.walther@alvetern.com">guido.walther@alvetern.com</a>   
				(we'll have bags and vests please make sure to wear sturdy shoes and bring a pair of gloves).
			</p>
			<p>
				We're looking forward seeing you again and would love to see new faces…
			</p>
			<p>
				Guido Walther
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
			date: "4/9/21",
			title: `Gate Card Audit`,
			html: `
			<p>
				Dear Homeowners,
			</p>
			<p>
				Highland Oaks will be performing a full audit of the cards entered into the gate system this season. You will need to provide the 5-digit number that is printed on your card in order for it to be activated again. Please fill out the electronic form below to be put into the system for amenity access. Instructions on how to locate the 5-digit device number are included on the form. Note: You can also use this form to request a card if you do not have one.
			</p>
			<p>
				The pool will be opening on 5/15/21.
				<strong>If you do not have your card number submitted prior to April 25th, you may have to wait as long as 2 weeks after submitting your form for your card to be activated.</strong>
				<br />
				<a href="https://forms.office.com/Pages/ResponsePage.aspx?id=1VxedePhwE6qn_GzKJyM_cAXh8zKK7tDgiSWSYN4YNlUMVIxNFJNSzFaUzJBVEw4WFBURlNQSkQySS4u">https://forms.office.com/Pages/ResponsePage.aspx?id=1VxedePhwE6qn_GzKJyM_cAXh8zKK7tDgiSWSYN4YNlUMVIxNFJNSzFaUzJBVEw4WFBURlNQSkQySS4u</a>
			</p>
			`
		},
		{
			date: "3/29/21",
			title: `Kids Easter Coloring Contest`,
			html: `
			<p>
				Dear Neighbors,
			</p>
			<p>
				Celebrate with us virtually and join us for our Kids Easter Coloring Contest! It's time to see your coloring skills.
			</p>
			<img src="assets/images/announcements/kideastercoloring.jpg" />
			<p>
				Coloring Sheets have been emailed to all residents.
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
