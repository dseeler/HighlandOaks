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
			date: "4/16/22",
			title: "Calendar of Events 2022",
			html: `
			<p>
			We are happy to announce the new 2022 calendar of events for our neighborhood. Please review them and RSVP when required. 
			</p>
			<ul>
			<li>
			May 21 - Spring Cleaning and Dumpster Day (all weekend) - Spring is here, and time to clean house. There will be a large 
			dumpster in the pool parking lot to allow homeowners to do some spring cleaning and bring items to the trash.  Please RSVP 
			by May 1st to <a href="mailto:lesliemshafer@yahoo.com">lesliemshafer@yahoo.com</a> if you are interested. This will allow 
			us to know the size of the dumpster required.  
			</li>
			<li>
			May 28 - End of School Party at Pool Pavilion (1-3 pm) - Music at the pool and Bingo during the "adult swim" breaks. We 
			will have treats for everyone and play Bingo for small prizes.       
			</li>
			<li>
			June 18th - Neighborhood Garage Sale with Craft/Trade Fair at the Pavilion. You must RSVP by May 29th if you want to 
			participate. We invite all kids and adults to bring crafts or products to sell. You can set up a table to sell anything 
			from wreaths to home-baked treats, lemonade, homemade crafts, etc. And if you have your own business, you can set up a 
			table and pass out fliers and/or giveaways. This will also be a neighborhood-wide garage sale day. We will hand out maps 
			at the Pavilion showing all garage sale locations in the neighborhood. We will advertise outside the area to get as many 
			visitors as possible. Please RSVP to <a href="mailto:lesliemshafer@yahoo.com">lesliemshafer@yahoo.com</a> if you are interested. 
			</li>
			<li>
			July 4th - Evening Cook Out at Pavilion (6-8 pm) - Hang out with neighbors and family at the Pavilion. We will have a grill set 
			up for hotdogs and burgers. This is a potluck, too, so please bring a side or dessert to share.  If anyone is interested in bringing 
			fireworks, please let us know.  Please RSVP before June 18th to <a href="mailto:lesliemshafer@yahoo.com">lesliemshafer@yahoo.com</a> if you are interested.  
			</li>
			<li>
			August 6th - Back to School Party at Pavilion - More details to come.  
			</li>
			<li>
			September - Chili Cook-Off - More details to come.  
			</li>
			<li>
			October - We will continue with our Halloween decoration awards. 
			</li>
			<li>
			November - Charity Food Drive Collection. 
			</li>
			<li>
			December - We will continue with our Christmas decoration awards. 
			</li>
			<li>
			December - Ladies Cookie Exchange
			</li>
			</ul>
			`
		},
		{
			date: "4/16/22",
			title: "Pickleball",
			html: `
			<p>
			Highland Oaks new pickleball courts are now open at the tennis courts. Come join the fun!
			</p>
			<img src="assets/images/announcements/pickleball.jpg" />			
			`
		},
		{
			date: "2/11/22",
			title: "Highland Oaks Annual Homeowners’ Meeting",
			html: `
			<p>
			<b>
			Highland Oaks Annual Homeowners’ Meeting
			<br>
			Saturday, February 12, 2022 at 11:00 am
			<br>
			Location:  Zoom
			</b>
			</p>
			<p>
			Join Zoom Meeting
			<br>
			<a href="https://us02web.zoom.us/j/86796490337?pwd=ZG5OMGEwUFdmTGhrUVBETFVZZGRyUT09">https://us02web.zoom.us/j/86796490337?pwd=ZG5OMGEwUFdmTGhrUVBETFVZZGRyUT09</a>
			</p>
			<p>
			Meeting ID: 867 9649 0337
			<br>
			Passcode: 033556
			<br>
			Dial: 1 301 715 8592
			</p>
			<p>
			All homeowners are encouraged to attend the Annual Meeting, being held via Zoom, due to Covid-19.  In order to determine that we have a valid quorum of homeowners for voting purposes, everyone must sign-in to the meeting with their actual name, rather than screen names. Anonymous logins will not be allowed to enter the zoom meeting.
			</p>
			<p>
			If you have specific questions that you would like to have addressed during the meeting, please email your questions to AMAG <b>TODAY</b> by 5:00PM.
			</p>
			<p>
			As this is a virtual meeting, your ballot must be returned by e-mail to: Admin@AssociationMgt.com or fax: 678-407-1125 <b>TODAY</b> by 5:00 PM.
			</p>
			`
		},
		{
			date: "1/31/22",
			title: "Upcoming Annual Homeowners' Meeting",
			html: `
			<p>
			Hello Highland Oaks Homeowners,
			</p>
			<p>
			Mark your calendars for our Annual Meeting via zoom on <b>February 12 at 11:00am</b>. Login information is listed on the attachment and will be emailed to all homeowners prior to the meeting.
			</p>
			<p>
			<b>To clarify how voting and proxy votes work:</b> The only item on the agenda that requires a vote is the election of new Board members. Since the meeting is virtual all votes are being collected by mail, email, or fax. Therefore, there is no need to designate a named proxy on the form. You can leave that space blank. 
			</p>
			<p>
			To make the election official, we need 65 votes to reach a quorum (25% of eligible Homeowners), so we encourage everyone to please complete the reverse side of the form (Ballot 2022) with your vote for Board Members, and return it whether you are planning to attend the Zoom meeting or not. All responses must be received by February 11.
			</p>
			<p>
			There are 2 positions on the Board of Directors open. If you are interested in joining the Board, please use the blank spaces provided to nominate yourself as a write-in candidate.
			</p>
			`
		},
		{
			date: "1/5/22",
			title: "Recycling and Yard Waste Services are Suspended-",
			html: `
			<p>
			Republic Services’ trash and recycling customers in unincorporated Gwinnett County can expect uninterrupted, on-schedule trash collection, but due to the significant impact that a spike in COVID-19 infections is having on Republic’s workforce, recycling services will be suspended until Republic’s workforce begins to normalize. Bulky items and yard waste pickup are also suspended temporarily.
			</p>
			<p>
			During this temporary service interruption, Republic Services customers may take their recycling, bulky items, or household trash to a drop-off site at one of the following locations:
			</p>
			<ul>
			<li>
			Recyclable Materials Only – 75 Curtis Road, Lawrenceville, GA (6:00am – 6:00pm)
			</li>
			<li>
			Household Trash/Bulky Items – 51 Patrick Mill Road SW, Winder, GA (Monday – Friday, 6:00am – 4:00pm; Saturday 6:00am – noon)
			</li>
			<li>
			Household Trash/Bulky Items – Richland Creek Landfill, 5691 S Richland Creek Road, Buford, GA (Monday – Friday, 6:00am – 4:00pm; Saturday 6:00am – noon)
			</li>
			<li>
			Household Trash/Bulky Items – Oak Grove Landfill, 937 Carl Bethlehem Road, Winder, GA (Monday – Friday, 6:00am – 4:00pm; Saturday 6:00am – noon)
			</li>
			</ul>
			<p>
			Republic Services provided the following message to its Gwinnett customers: We apologize for the inconvenience this temporary service interruption is causing residents. Like many industries all over the country, we are trying to manage a severe manpower shortage. The COVID Omicron variant continues to hit our operations hard; we currently have approximately 20 percent of our Gwinnett workforce on quarantine. There will continue to be temporary service disruptions for recycling, bulky materials, and yard waste in the coming days. We ask for and appreciate your patience as we work to get past these issues.
			</p>
			`
		},
		{
			date: "1/5/22",
			title: "Seasonal Reminders",
			html: `
			<ol>
			<li>
			All decorations must be removed within 30 days past the holiday.
			</li>
			<li>
			Per our covenants, you are NOT allowed to burn yard waste. This does not include burning wood in fire pits or outdoor cooking.
			</li>
			<li>
			DO NOT blow your yard debris and leaves into the street.  If you need to have your yard waste collected, please contact Gwinnett County Solid Waste Management at 770-822-7141. (Yard Waste and Recycling Collection is currently suspended).
			</li>
			<li>
			If you have not received the HOA 2022 budget and your account statement yet, please contact AMAG at <a href="mailto:admin@associationmgt.com">admin@associationmgt.com</a> or 678-407-1115.
			</li>
			<li>
			2022 Assessments (dues) are due on February 28, 2022. Interest accrues starting March 1. Late fees will be applied on March 11.
			</li>
			<li>
			If you have not yet voted for the Changes to our Amendments, there is a ballot (consent form) attached. All information can be found on our website: <a href="myhighlandoaks.com">myhighlandoaks.com</a>. So far we have received only 88 votes.
			</li>
			<li>
			Make 2022 your Year to Volunteer! We need people on the Board of Directors, Pool Committee, and Welcome Committee. Email <a href="mailto:HighlandOaksHOAPresident@gmail.com">HighlandOaksHOAPresident@gmail.com</a> to sign up.
			</li>
			</ol>
			`
		},
		{
			date: "1/4/22",
			title: "HOA Board Members Wanted:",
			html: `
			<p>
			We need people to serve our community by joining the Highland Oaks Board of Directors. We have 2 positions open and the term length is 2 years. If you are interested, please submit a short bio of yourself to be 
			included on the 2022 ballot. Do you know someone who would be perfect in this position? Nominate them! People are unlikely to nominate themselves, but may be willing to serve if they are nominated by someone else. 
			Please email all nominations to <a href="mailto:admin@associationmgt.com">admin@associationmgt.com</a>.
			<p>
			`
		},
		{
			date: "12/28/21",
			title: "Holiday Décor Contest Winners!",
			html: `
			<p>
			Thank you to everyone who participated in this year‘s decorating contest. It was wonderful to see everyone’s beautiful decorations. There were so many to choose and we look forward to seeing everyone’s next year!
			</p>
			<p>
			The winners of our decorating contest are:
			</p>
			<ul>
			<li>
			927 Richmond Hill
			</li>
			<li>
			1554 Highland Oaks Court
			</li>
			<li>
			1652 Branch Tree Cove
			</li>
			</ul>
			<p>
			Winners will be given their prizes soon!
			</p>			
			`
		},
		{
			date: "12/14/21",
			title: "Amendment Voting",
			html: `
			<p>
			Dear Homeowners,
			</p>
			<p>
			Our Incentive to Vote Contest has ended. Thank you to all our homeowners who submitted their voting forms. As of 12/9, we received 87 votes 
			(only 34% of homes). Although we had a goal to get as many votes as possible by December 1, you may still submit a vote at any time.
			</p>
			<p>
			<b>Congratulations</b> to 1542 Teal Drive! You are the winner of the Week 4 drawing! Your $25 Kroger gift card will be delivered to your mailbox this week.
			</p>
			<p>
			Please keep voting, we need to hear from ALL our homeowners. Consent (voting) form is attached. If you have questions about the amendments, please email <a href="mailto:admin@associationmgt.com">admin@associationmgt.com</a>.
			</p>
			<p>
			Thank you!
			</p>
			`
		},
		{
			date: "12/13/21",
			title: "Holiday Decorating Contest",
			html: `
			<img src="assets/images/announcements/holidaydecoratingcontest.png" />			
			`
		},
		{
			date: "11/23/21",
			title: "Keep Voting!",
			html: `
			<p>
			This is the last week to have your name entered into the Incentive to Vote Contest. See the attached voting ballot (consent form) and send it in asap. Instructions are listed at the bottom of the page.
			</p>
			<p>
			Congratulations to 1478 Macy Lane! You are the winner of the Week 3 drawing! Your $25 Kroger gift card will be delivered to your mailbox this week.
			</p>
			<p>
			Please keep voting, we need to hear from ALL our homeowners. Consent (voting) form is attached. We received 12 votes last week bringing the total number of votes to 56. ( Less than 22% of our homeowners). If you have questions about the amendments, please email admin@associationmgt.com.
			</p>
			<p>
			Thank you!
			</p>
			`
		},
		{
			date: "11/15/21",
			title: "Clarification on POA law",
			html: `
			<p>			
			Dear homeowners,
			</p>
			<p>
			There have been several postings on Social media and an anonymous letter delivered to homes regarding the vote on the proposed amendments to the Covenants. We want you to be able to make an informed decision on this vote so we have provided some very important corrections and clarifications 
			document for your serious consideration. This document can be found under the <a href="./HOADocuments">Documents tab</a>.
			</p>
			<p>
			Thank You
			</p>
			`
		},
		{
			date: "11/15/21",
			title: "Please Vote!",
			html: `
			<p>
			Congratulations to 802 Pinder Point Court! You are the winner of the Week 2 drawing! Your $25 Kroger gift card will be delivered to your mailbox this week.
			</p>
			<p>
			Our week 1 winner has very generously asked us to donate their gift card to a hungry family. It will be donated to the Lawrenceville Co-op. https://lawrencevilleco-op.org/
			</p>
			<p>
			Please keep voting, we need to hear from ALL our homeowners. Consent (voting) form is attached. We received 14 votes last week bringing the total number of votes to 44. ( Less than 17% of our homeowners). If you have questions about the amendments, please email admin@associationmgt.com.
			</p>
			<p>
			Thank you!
			</p>
			`
		},
		{
			date: "11/10/21",
			title: "What’s the Latest News?",
			html: `
			<p>
			The Fall/Winter 2021 newsletter has been delivered to all mailboxes and emailed to all homeowners. It is also available under the <a href="./Newsletters">Newsletters tab</a>.
			</p>
			`
		},
		{
			date: "11/9/21",
			title: "Volunteers Needed:",
			html: `
			<p>
			Hello neighbors;
			</p>
			<p>
			CLEANING NUMBER 4, Saturday November 13th . 
			</p>
			THIS IS THE LAST FOR THIS YEAR, I WILL POST THE ONES FOR NEXT YEAR EARLY 2022. If weather is not permitting the cleaning we will move the date by one week, please check the e-mail from the Association and the posting on the Facebook page.
			<p>
			We will meet at the pavilion at 8 AM and pick up trash between Buford Drive and Azalea through the Gwinnett Clean & Beautiful’ s Adopt-a-Road Program.
			</p>
			<p>
			You get to meet old and new neighbors, have a nice workout and keep Ridge Road look nice AND you can proudly say you did something for your neighborhood.
			</p>
			<p>
			If you are in High school you can earn some community service hours. Please make sure to bring your school’s form.
			</p>
			<p>
			Please note that due to the program guidelines, children under 12 are not permitted to participate for safety reasons.
			</p>
			<p>
			Please let me know if you can make it so we have enough supplies. Sign up by e-mail at  guido.walther@alvetern.com  
			</p>
			<p>
			(we'll have bags and vests please make sure to wear sturdy shoes and bring a pair of gloves)
			</p>
			<img src="assets/images/announcements/adoptaroad.jpg" />			
			<p>
			​We're looking forward seeing you again and would love to see new faces…
			</p>
			<p>
			Guido Walther
			</p>
			
			`
		},
		{
			date: "11/8/21",
			title: "Please vote!",
			html: `
			<p>
			Congratulations to 660 Branch Tree Way! You are the first winner of our drawing! Your $25 Kroger gift card will be delivered to your mailbox this week.
			</p>			
			<p>
			Please keep voting, we need to hear from ALL our homeowners. All the following documents are available under the <a href="./HOADocuments">Documents tab</a>.
			</p>
			<ul>
			<li>
			Consent (voting) form
			</li>
			<li>
			the Proposed Amendment Discussion from the May 2021 community-wide zoom informational meeting
			</li>
			<li>
			the Question and Answer document from questions received during that meeting
			</li>
			<li>
			a comparison of Leasing Provisions – what will change and why
			</li>
			<li>
			the actual amendment (in legal form)
			</li>
			</ul>				
			`
		},
		{
			date: "11/5/21",
			title: "Halloween Decorating Contest Winners!",
			html: `			
			<p>
			We want to thank everyone who helped make Halloween in Highland Oaks super fun and spooky this year! There were so many awesome houses it was hard to choose winners. We hope everyone had fun and that your kids got way too much candy!
			</p>
			<p>						
			The winners of Halloween decorating contest are:
			</p>
			<p>
			927 Richmond Hill Court
			</p>
			<p>
			1807 Richmond Hill Drive
			</p>
			<p>
			1634 Crittenden Drive
			</p>
			1590 Highland Oaks Way
			<p>
			749 Teal Court
			</p>
			<p>
			Your prizes will be delivered soon!
			</p>
			`
		},
		{
			date: "11/5/21",
			title: "Amendment Voting Incentive!",
			html: `			
			<p>
			Hello Neighbors!
			</p>
			<p>
			To encourage participation in this important vote, we are having a contest! While we highly encourage you to vote YES, it is not necessary to be included. We need 173 homes to vote favorably in order to adopt the changes to our amendments. As of today, we have 16 Yes votes, and 13 No votes.
			</p>
			<ol>
			<li>
			Supporting documentation and a consent (voting) form are available under the <a href="./HOADocuments">Documents tab</a>
			</li>
			<li>
			The amendment changes are based on the expert legal advice from our lawyer.
			</li>
			<li>
			There is misinformation on Facebook, if you have questions, please send an email to admin@associationmgt.com.
			</li>
			<li>
			If you previously voted no, and after considering additional information have changed your mind, you may send an updated Consent Form.
			</li>
			<li>
			Winners will be drawn on Fridays and announced the following Monday.
			</li>
			</ol>
			<img src="assets/images/announcements/votegraphic.jpg" />
			`
		},
		{
			date: "10/22/21",
			title: "Nearby Crime",
			html: `
			<p>
			Highland Oaks,
			</p>
			<p>
			Please review the below information from Gwinnett County Police:
			</p>
			<p>
			There have been an uptick in catalytic converter thefts in the Lawrenceville and Buford areas. These thefts are occurring overnight. Please tell your members to keep an eye out and if they see something that looks out of place to immediately call 911. It is not recommended that they approach these subjects, but get a good description of the person and a direction of travel if they leave.
			</p>
			<p>
			Thank you,
			</p>			
			<p>
			Highland Oaks Board of Directors
			</p>
			`
		},
		{
			date: "10/7/21",
			title: "Movie Night!",
			html: `
			<p>
			Dear Highland Oaks Residents,
			</p>
			<p>
			Please join us October 23 for a movie night on the lawn by the pavilion. We will be watching Hotel Transylvania! Please bring a blanket or a chair! The movie will start promptly at 7:30 PM.
			</p>
			<p>
			We will also be having a house decorating contest! Homes will be judged on October 30th and the winning announcement will be made on November 1st!
			</p>
			<p>
			We look forward to seeing everyone and viewing their spooky homes!
			</p>
			<p>
			Highland Oaks Social Committee
			</p>
			<img src="assets/images/announcements/movienight.png" />
			`
		},
		{
			date: "10/7/21",
			title: "Parking Lot Paving",
			html: `
			<p>
			Dear Neighbors,
			</p>
			<p>
			The parking lot will be sealed this coming Sunday Oct 10. The lot will be blocked off early Sunday morning and will not be open for any vehicle parking all day Sunday and most of the day Monday Oct. 11th.  This is the second phase of our parking repaving project begun last year as recommended by our repaving company. Painting to mark parking spaces will occur later next week. 
			</p>
			<p>
			Please REMOVE any vehicles that are in the amenity parking area  before Sunday and DO NOT PARK any vehicle Saturday night the 9th or you WILL BE TOWED! 
			</p>
			`
		},
		{
			date: "9/27/21",
			title: "Neighborhood-Wide Garage Sale!",
			html: `
			<p>
			We will be posting banners at the entrances to advertise our sales. Please add your own signage to direct people to your homes.
			</p>
			<img src="assets/images/announcements/garagesale.png" />
			`
		},
		{
			date: "9/9/21",
			title: "C.O.P.S. Meeting",
			html: `
			<p>
			Dear Highland Oaks Residents,
			</p>
			<p>
			We had a great C.O.P.S. meeting last night with Officer Joseph. If you missed it, please see the PowerPoint presentation under the <a href="./HOADocuments">Documents tab</a>. Other points not included in presentation:
			</p>
			<ul>
			<li>
			Please attend the 2021 Public Safety Fall Festival on 11/13 10am-2pm at Coolray Field
			</li>
			<li>
			There are many free classes being offered: RADD – a self-defense class for women, the Citizens Police Academy, and Police Explorers for 14-17 year olds
			</li>
			<li>
			Officer Joseph is offering free home security reviews – contact him to make an appointment
			</li>
			<li>
			Contact Chris Weaver at Christineweaver@bellsouth.net or Officer Joseph at Fed.Joseph@GwinnettCounty.com with any questions.
			</li>
			<li>
			</li>
			</ul>
			<p>
			Thank you
			</p>
			`
		},
		{
			date: "9/9/21",
			title: "Pool Closure",
			html: `
			<p>
			Hello Homeowners!
			</p>
			<p>
			We hope you have enjoyed the pool this season! Since the heat is holding and many people are still enjoying the pool, we plan to keep it open as long as possible. Please note:
			</p>
			<ul>
			<li>
			We no longer have lifeguard services.
			</li>
			<li>
			The pool will still be cleaned 3 times a week, but that does not include the bathrooms.
			</li>
			<li>
			Please report any maintenance issues asap to highlandoakspresident@gmail.com.
			</li>
			<li>
			Please respect the rules. If rules are broken, the pool will be closed sooner.
			</li>
			<li>
			The last day to enjoy the pool is 9/26.
			</li>
			<li>
			We are always looking for Pool Committee members. If you would like to join, please email highlandoakspresident@gmail.com
			</li>
			</ul>
			<p>
			Thank you!
			</p>
			<p>
			The Highland Oaks Board of Directors
			</p>
			`
		},
		{
			date: "8/16/21",
			title: "Comparison of Leasing Provisions Document",
			html: `
			<p>
			Dear Highland Oaks Homeowners,
			</p>
			<p>
			We have received feedback from some homeowners that seems to indicate some misunderstanding concerning the proposed  leasing provision. 
			<b>Please read the Comparison of Leasing Provisions document</b> (found in the <a href="./HOADocuments">Documents tab</a>) for a comparison of our current covenants and 
			the proposed changes.  <i>For over 91% of homeowners the change will be transparent and have NO impact.  All the existing Covenants regarding 
			rules and enforcement remain identical.</i>  
			</p>
			<p>
			Overall, our community <b><i>currently</i></b> has minimal issues with rental properties. We have properties that are being leased where 
			renters keep beautiful yards or the owners are able to maintain the property to the standard that avoids violations. There have been several 
			amazing renters living in our community. Some of them love our community and have become owners! These changes will have NO EFFECT on these renters 
			other than ensure that their contact information is available to the HOA and the management company.  <i>However, as noted in this document the real 
			estate environment is changing and we recognize that the current leasing provisions are both not being followed and will be insufficient in the 
			future for keeping our community primarily a single family owned neighborhood.</i>
			</p>
			<p>
			As always , if you want to discuss the details or have comments or questions, please forward those to the board so your questions may be answered and distributed to the whole community.
			</p>
			<p>
			The voting ballot (aka the Consent Form) is also available under the <a href="./HOADocuments">Documents tab</a>. Voting ends December 1, 2021.
			</p>
			<p>
			Thank you!
			</p>
			<p>
			The Highland Oaks Board of Directors
			</p>
			`
		},
		{
			date: "8/16/21",
			title: "Suspicious Activity",
			html: `
			<p>
			Dear Highland Oaks Homeowners,
			</p>
			<p>
			There has been some suspicious night time activity on the tennis observation deck. If you see anyone in the commons area after closing (10:00pm), 
			please call the police. Do not approach anyone, please let the police handle it. I will be in contact with our COPS liaison tomorrow regarding 
			this matter. Thank you! 
			</p>
			<p>
			Chris Weaver
			<br>
			C.O.P.S Liaison Highland Oaks
			</p>
			`
		},
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
			date: "8/3/21",
			title: "Newsletter and Amendment Change Proposal Information Available",
			html: `
			<p>
			Dear Highland Oaks Homeowners,
			</p>
			<p>
			The <a href="/assets/documents/HOA Winter 2021.pdf" target="_blank">newsletter</a> was emailed to all homeowners and is available on our website under the <a href="./Newsletters">Newsletter tab</a>. Please read it for 
			information about upcoming events and our mid-year review.
			</p>
			<p>
			We have also added the Questions and Answers from our POA meeting in May, as well as the Amendments changes and Consent Form under the <a href="./HOADocuments">Documents tab</a>. Please review them.
			<ul>
			<li>
			If you have any additional questions please send them to AMAG (admin@associationmgt.com) and we will provide answers to your questions before you make your decision.
			</li>
			<li>
			If you have already submitted a form previously (emailed responses without Consent Form are not valid), you may change your vote by submitting a new form. The form with the latest date will be the one included in the final tally.
			</li>
			<li>
			The deadline for voting is <b>December 1st 2021</b>.
			</li>
			<li>
			Votes may be sent in three ways;  by mail to the address below, fax 678-407-1125,  or you may print the document and email to admin@associationmgt.com. All consent forms must have the signature of the homeowner.
			<br><br>
			Highland Oaks Homeowners Association, Inc.
			<br>
			c/o Association Management Advisory Group, Inc.
			<br>
			P.O. Box 491537
			<br>
			Lawrenceville, GA 30049
			</li>
			</ul>
			
			</p>
			<p>
			These forms and other information about our neighborhood may be found on our updated website at <a href="myhighlandoaks.com">myhighlandoaks.com</a>. Please note that you may need to refresh your browser to see the latest updates.
			</p>
			<p>
			<b>
			The Board of Directors fully supports adopting these changes and hope you will vote in support of them.
			<br>
			Thank you!
			</b>
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
				We have added the POA information documents to the <a href="./HOADocuments">Documents tab</a>. Please email AMAG at <a href="mailto:admin@associationmgt.com">admin@associationmgt.com</a> if you have any questions.
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
				Our POA informational meeting is this Saturday, May 1, at 10:00am. Please review the Amendments and Consent form under the <a href="./HOADocuments">Documents tab</a>. If you have any questions that you would like addressed during the meeting, please email them to <a href="mailto:admin@associationmgt.com">admin@associationmgt.com</a>. The link for the zoom meeting is below. We hope to see you then. 
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
				Happy Spring! Now that the weather is warmer, many residents are making changes to the exterior of their homes. Please remember that ANY exterior change, such as painting, changing your landscaping, or adding a fence requires a Modification Request Form to be submitted to our Architectural Review Committee. For your convenience, the MRF is available under the <a href="./HOADocuments">Documents tab</a>. The very helpful ARC Guidelines and the Covenant Highlights are also available. Please review these documents as they have recently been updated.
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
				Did you miss the annual meeting? If so, the slide presentation is available under the <a href="./HOADocuments">Documents tab</a>.
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
