# Lincoln Highway Road Trip: Milestone 2

## About this project

The aim of this project is to help people plan a road trip along the Lincoln Highway in Pennsylvania. 

1.	Give people the option to plan a trip that doesn’t require much air travel or public transportation, in line with COVID-19 restrictions. 
2.	Highlight the benefits of an old highway road trip like quirky roadside attractions and locally owned restaurants/hotels. I planned this trip based on a road trip I took back in 2016, so that I could really get to know the most eclectic parts of my home state (the heart of my state) before I moved to Ireland. The core of this project is based on that specific trip. 
3.	Educate road trippers on the history of the Lincoln Highway, which is one of the oldest cross country highways in the US. It’s now mostly bypassed by the turnpike on route 76 in Pennsylvania. One aim of this project is to encourage holiday-makers to stay off the beaten path and explore recent history based off of one road. 

The Lincoln Highway Road trip is a project meant to give people an alternate to public trave during a pandemic, persuade travelers to explore attractions off the beaten track, and teach site visitors about the history of the Lincoln Highway/the state of Pennsylvania along the way. 

## Live Site

www.lincolnhighwayroadtrip.com


![Responsive demo](assets/images/responsive-demo2.png)

From [Am I Responsive?](http://ami.responsivedesign.is/)

## Table of Conents

- [Ux & Design Planning](#ux)
- [Features](#features)
- [Technologies used](#technologies)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

<br>

<a name="ux"></a>

## UX Planning

### Research:

I started this project by researching travel sites that are specifically for planning out a road trip. The purpose of this research was to narrow down specific features that would work best for a road trip instead of destination travel. 

I'm going to cite some of these sites here:

[Roadtrippers](https://roadtrippers.com/)

[The Atlas Obscura Guide to Pennsylvania](https://www.atlasobscura.com/things-to-do/pennsylvania)

[The Irish Road Trip](https://www.theirishroadtrip.com/)

[Lincoln Highway Heritage Corridor](https://lhhc.org/welcome.html)

### User Stories

User stories are effective for planning out and determing which features will work on the site and which features will cause scope creep. As I worked on this project, I was able to identify which user stories would help me build an effective travel site in the time period for this project, and which features needed to be changed or pushed back to a later version of the site. 

These are the user stories I've identified for the current version of this project:

1.	Jo wants to have a slideshow of the unique attractions along the highway, so that they can talk their partner into taking a road trip instead of going on a beach holiday.
2.	Julia likes to plan ahead for places to eat and other places of interest in while she’s on a road trip. She wants to find suggestions for restaurants and hotels directly on the site.
3.	Miles is fascinated by the history of the roadside attractions on the Lincoln highway. He wants to learn more about the general history of the highway and facts about the attractions. 
4.	Skye lives near the Lincoln highway heritage quarter in Pennsylvania and wants to keep up with events at each destination. She’d like to subscribe to a newsletter to get updates. 
5.	Robert wants to have a way to search the map for places to stop along the way. He’s particularly concerned with locating petrol stations, so that the car doesn’t break down and so that he can keep an eye on the cost of petrol. 

### Wireframes

[Sitemap](https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:24e97274-e2c5-47b4-af2c-a77bf2a2a116)

[Home](https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:9d169343-950f-44eb-876b-656b23d0cb4f)

[About the Lincoln Highway](https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:700b8ac2-8078-4bb9-9483-abebc9f6255e)

[Plan your trip](https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:ac31e46a-6be3-46d6-9b39-ff79999767e7)

[Search](https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:97b663bd-cc07-49ac-bbb5-1011388c46ac)

### Design

**Colors**

To plan the colours for this site, I ran the Pennslyvania flag through [Coolors](https://coolors.co/).

Then I used Coolors to desaturate the heavy, government-issued colours of the Pennsylvania state flag into a softer and more modern palette.

Here's the original palette I started with: 

[Pennsylvania state flag colours](https://coolors.co/022986-ffb800-c3ddb7-b25b00-858fa8)

I'm also attaching a link to the state flag for reference:

[Flag of Pennsylvania](https://www.britannica.com/topic/flag-of-Pennsylvania)

And here's my completed, softer pallette that was used on the site styles:

[Lincoln Highway Road Trip colour palette](https://coolors.co/ffca85-011638-087e8b-aed19e-dce5e2)

The whole site mostly has a background colour of very light blue-grey. To add some contrast between the header and the rest of the site, I put banners of light green or yellow at the top of the page as a banner. I also added altnernating sections of green and light blue on the maps page so that each location section stood out from the one above it on the page. 

The background colours on the site are all light, and I made all text on the site dark to contrast. This makes it easier for site visitors to read the text. Any text area that was difficult to read, I updated to improve my accessibility score on Lighthouse. 

**Logo Design**

The logo colours are the yellow and dark blue used in other areas of the site. 

The logo shape is the keystone, which is an emblem for the state of Pennsylvania (the keystone state). I chose the keystone instead of the generic route symbol used in the US to distinguish the scope of this project. The route sign is used throughout the US, but the keystone is specific to Pennsylvania. 

Inside the keystone, I placed 30 for the name of the route that's assigned to the Lincoln Highway. All routes in the US have a number assigned to them, but only some have specific names like the Lincoln Highway. I also added a map symbol to represent that this website is meant for planning a road trip. 

For the logo, I avoided using the colours or emblems used by the official Lincoln Highway Heritage Corridor or Historical organisations. I did this to avoid copyright infringement, as I'm not associated with these organisations. 

![Logo Design](assets/images/lincoln.png)

**Fonts**

I used Google fonts for this project, and chose fonts that are currently popular on the Google fonts front site: Roboto, Poppins, and Kiwi Maru. 

Roboto is an easy to read and accessible font that pairs well with nearly any font. I used Roboto in my header and footer navigation link areas. 

I chose Poppins for the main text areas of my site because it's the default font used on some website building platforms. It's clear, accessible, and resizes well on mobile devices without needing to be adjusted. Also, I prefer sans serif fonts, so from a design perpective prefer to use them in my design planning. 

In the banner headings near the top of each page, I used Kiwi Maru because it's both bold and quirky. I think it complements the san serif fonts used on the rest of the site, while adding a fun touch to the main headings. 

The reason I used three fonts is that I understand a font pack should remain small and that adding multiple fonts to a site can increase loading time.

<a name="features"></a>

## Features: 

### User Story Features:

#### User story 1- Image slideshow
The slideshow feature is meant to draw the site visitor in so that they can see for themselves the unique roadside attractions on the Lincoln Highway. These quirky attractions, like the Fallingwater House or the Bedford Coffee Pot restaurant are certainly unique and not features that you would find anywhere else in the world. They’re talking points. 

I imagined a person who wants to convince their partner to plan a road trip instead of going to the beach for a few days. I thought, would I be convinced by compelling images to take a holiday that jumps from one place to the next instead of a relaxing one? 

The slideshow is meant to convince people who are on the fence. It’s like a thesis statement of: ‘what do you think about this?’ Then the site visitor can click through each image and decide for themselves. 

To build the slideshow, I followed the instructions from this W3 schools [guide](https://www.w3schools.com/howto/howto_js_slideshow.asp).

I edited their HTML to add in stock images specific to different locations along the way, which I’ve sited the sources for below. The captions and numbers on the demo slideshow were also removed from the code on the live site. 

The images are not in the exact order of the trip, but in a random order. The reason for this choice is that the Fallingwater image works the best with the site’s colour scheme and is an elegant introduction to what the road trip guide has to offer. Plus, one image location may stick out to a different site visitor, so I wanted to have the images appear at random so that they would have to go to the map page to learn more. 

The CSS for the slideshow demo was edited to match the colour scheme for the site. 

For the most part, the JavaScript from the tutorial was followed closely with little change. I’ve marked this in the JavaScript file the slideshow, along with my own notes.

![Slideshow Gif](assets/images/slideshow.gif)

#### User Story 2- Information about hotels/restaurants 

This feature is connected to the main Google Map that’s on the map page. 

To allow users to navigate the map page to plan out their road trip, I added a few buttons on the page. The first is on the card for each map location, that appears when you click on a map pin. There’s a More Info anchor link that then takes the user to a location section on the page.

In each location section, I added in a paragraph of text with external links to different places to eat along the road trip. Then I created a Read More button with jQuery to show more information about hotels and places of interest (more external links). The jQuery button also can be clicked on to show less information (Read Less). jQuery was specifically used to demonstrate that I understand how to use this JavaScript framework.

I followed these two Youtube videos for instructions on how to build these Read More/Read Less buttons with jQuery:

[LearnDesign]( https://www.youtube.com/watch?v=uI18xGocVnw)

[Coding Artist](https://www.youtube.com/watch?v=uzSkExQtPkg)

Finally, I added an anchor link to a map icon below the image in each location section. The map icon anchor link jumps back to the Google Map near the top of the page.

I used `scroll-behavior: smooth;` CSS to make all these page jumps less harsh.

![Location Gif](assets/images/location-userstory.gif)

#### User Story 3- History of the Lincoln Highway

This features is more a text content section that required me to reasearch the highway and to write my own content summary that's engaging for the site visitor. I've also included some general information about the state of Pennsylvania. 

To save space on the page, I also used a Read More/Less Button, using the same tool from User Story 2.

#### User Story 4- Newsletter 

I initially wanted to create a pop-up newsletter subscribe feature that appears when you enter the site. 

To test out this feature, I tried adding embed code from Mailchimp to the homepage, but I didn’t think that this pop-out feature was intuitive for this project. While automatic pop-ups can be built with JavaScript, I didn’t think that this feature was good for user experience. The user is reminded to sign up for the newsletter, but they don’t have a choice over whether they see this pop-up or not. 

I decided to go for a design similar to the Contact Us button that I added in the site footer instead. The contact button gives the site visitor a choice if they want to access the newsletter form. 

I placed the newsletter sign up buttons on the map page and on the about page, near the top of the page to remind visitors to sign up. 

To build the pop-out button and modal, I used a link styled like a button following the instructions from CSS tricks [here](https://css-tricks.com/css-basics-styling-links-like-boss/).

Then I followed [these instructions](https://www.w3schools.com/howto/howto_css_modals.asp) from W3 Schools to build a pop-out modal. 

The modal HTML is a basic form with a Bootstrap button. It’s the same type of form used in my Contact Us button (which is based on a form I created for my Milestone 1 project). I added an image to this newsletter pop-out content to add more space and emulate the style of the Mailchimp test form I made. 

For form storage, I used EmailJS. I followed [their documentation](https://www.emailjs.com/docs/tutorial/creating-contact-form/) directly. I couldn’t get the instructions from the course video to work as expected, and I’ve noted this in my testing section.

My mentor suggested that I try using a custom post-submit pop-out for after the form is sent, instead of a general alert. So I added these feature to the form using Sweet Alert’s documentation [here](https://sweetalert.js.org/).

To reset the form after information has been sent to EmailJS, I followed [these instructions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset) from Mozilla’s documentation.

![Newsletter Gif](assets/images/newsletter.gif)

#### User Story 5- Search Box for Map

I added a Google Places Search Box so that users can search for petrol stations or other locations to stop not mentioned on the location setions. This feature was originally part of the map on the Plan Your Trip page. However, I have the map on this page set to a zoom of 7 to show all the markers and cards for designated places of interest.

After testing on the Search Box and trying to set specific bonds for the map, it turned out that the Search Box local markers don't stay fixed on the viewport if you have a closer zoom in on the map. I've more information on this in the testing section. 

My mentor and I decided that the best way to add this feature in would be to create a new map and Search Box on a page titled Search. The map is zoomed out to a 13 zoom on Pittsburgh, so that site visitors can move around the map and use the Search Box to find specific points of interest around each location on their own. 

The JavaScript for this feature is mostly from [Google Search Box's documentation](https://developers.google.com/maps/documentation/javascript/examples/places-searchbox#maps_places_searchbox-javascript).

I also followed the instructions on the general [Google Autocomplete documentation](https://developers.google.com/maps/documentation/javascript/places-autocomplete?hl=en#places-searchbox).

![Search Box Gif](assets/images/searchbox.gif)

### Other Existing Features

#### Covid travel announcment

I used Bootstrap to create a travel alert to remind visitors of Covid-19 restrictions in Pennsylvania. The code for this alert comes from [this alert code](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing) with a close button.

#### Bootstrap Nav

To save time to build other features on the site, I used a Bootstrap navigation with a dropdown folder for anchor links on the Plan Your Trip (map) page. 

I followed the navbar instructions on Bootstrap [here](https://getbootstrap.com/docs/4.0/components/navbar/#nav).

The instructions for building the mobile navigation on Bootstrap were found [here](https://getbootstrap.com/docs/4.0/components/navbar/#responsive-behaviors).

#### Explore button

This feature is simply a link styles ad a button that links through to the Map it Out section of the map page. I placed this on the homepage so that a site visitor can click through to start planning their trip after seeing the slideshow.

#### Contact Us button

To save space on building a Contact Us page, I created a pop-out button that opens into a form. The form connects to EmailJS, requires Google reCAPTCHA to submit, and shows a Sweet Alert post submit message. 

This feature uses the same tools as the Newsletter feature for the User Story above. 

#### Social Links

I used Font Awesome icons to create external links to the homepage of social media sites (which would be real social media pages for an actual business) and to my email and phone. 

Because these are external links that I'm not entirely sure are secure, so I used `rel="noopener"` tags on all external links used on the site. 

#### Explore Pennsylvania links

To give road trippers more options for researching/planning their trip, I included direct footer links to trave sites about distinctive and unusual locations in Pennsylvania. This was included to give visitors as much information to plan a completely unique trip that they have the resources to organise. 

#### Map with markers and corresponding cards

The map on the Map it Out page is the key feature for this project, since it marks out 7 locations in the state of Pennsylvania, going across the state from west to east. 

To start building this map, I followed the course instruction videos and [this guide](https://developers.google.com/maps/documentation/javascript/overview) on the Maps JavaScript API.

Then I added markers and info windows for each marker, which appear on mouseover/mouseout event listeners, by following this this [Youtube video](https://www.youtube.com/watch?v=Zxf1mnP5zcw) by Traversy Media.

I also followed [Google's documentation](https://developers.google.com/maps/documentation/javascript/infowindows) on adding info windows.

Next, I created custom map markers with a star inside the regular red Google maps marker. [This guide](https://developers.google.com/maps/documentation/javascript/custom-markers) taught me how to add the custom markers. The custom marker comes from [KML4 Earth](http://kml4earth.appspot.com/icons.html).

All maps on the site are styled to have an atlas design on Google's Cloud-based map styling, using [this documentation](https://developers.google.com/maps/documentation/javascript/styling).

Finally, I added custom location cards to the maps.js file. Each unique card appears when a site visitor clicks on the map marker. This part of the map feature was built using a click event listener and by following [this StackOverflow post](https://stackoverflow.com/questions/47017679/how-to-show-infowindow-content-in-separate-div).

The lat/long positions come from [this site](https://www.maps.ie/).

#### 404 Page

I added a custom 404 page to the site by naming the page 404.html. GitHub Pages automatically assigned the page as the default 404 page in case a site visitor goes to a broken link.

### Future features

1. I plan to add Google Directions to the map on the search page so that Route 30 is more clearly marked out on the search map for site visitors to follow, instead of requiring users to scroll through the map to the next location.

2. The markers on the main map are customised, but not accessible to screen readers. In a future version of this project, I plan to improve the accessibility of these markers. 

3. The pop-out forms on the site are not fully accessible to screen readers. I'd also like to fix these forms to be accessible so that the forms pop-out if a user has a screen reader. 

4. I'd like to add a section on the About the Highway page with more resources on the Lincoln Highway Heritage Quarter.

<a name="technologies"></a>

## Technologies used

### Languages and libraries

- [HTML5](https://html.com/html5/)
    - This project uses **HTML5** to build the pages on the site.

- [CSS3](https://html.com/css/)
    - I used **CSS** to style the HTML.

- [Bootstrap CSS](https://getbootstrap.com/docs/3.4/css/)
    - I used **Bootstrap CSS** to style buttons on the site. I also used Bootstrap grids to create the structure of my pages and to allow the site to resize responsively on different devices.

- [Google Fonts](https://fonts.google.com/)
    - Roboto, Poppins, and Kiwi Maru were added to the project using **Google Fonts**

- [Font Awesome](https://fontawesome.com/)
    - I added icons from **Font Awesome** to the site footer and to encourage visitors to jump back up to the map section of the map page. 

- [JavaScript]( https://www.javascript.com/)
	- I used vanilla **JavaScript** for the slideshow, map, and form pop-outs on the site. 

- [jQuery](https://jquery.com/)
	- The Read More/Less button functionality works through **jQuery**.

- [Bootstrap JS](https://getbootstrap.com/docs/3.4/javascript/)
    - I used **Bootstrap JS** for the site navigation. I wanted to save time on adding a dropdown folder in the main navigation without having to code it myself. I also used Bootstrap JavaScript for the mobile navigation button. 

- [Popper](https://popper.js.org/) 
    - The navigation bar also uses **Popper**.

- [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/overview)
  - The map was created from this custom **Google Maps API** and the atlas style used for the map colouring comes from their built-in map style options and a unique map style ID. 

- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
  - The Search Box feature connected to the map was added to the site using the **Google Places** library.

- [Google reCAPTCHA2](https://www.google.com/recaptcha/about/)
  - **reCAPTCHA2** is added to all forms through **EmailJS** to prevent form/newsletter spam. This only works on the live site, as the account is associated with my custom domain name.

- [EmailJS](https://www.emailjs.com/)
    - I used **EmailJS** for form storage on the contact form in the footer and for the newsletter sign up on the map and about pages.

- [Sweet Alert](https://sweetalert.js.org/)
  - This tool is used to show a post-submit alert after any form on the site is submitted to **EmailJS**.

### Other tools used

- [JIRA](https://www.atlassian.com/software/jira)
    - I built my original user stories and started the Strategy Plane on a **JIRA** board. 

- [Trello](https://trello.com)
    - I used a **Trello** scope/strategy board to visualise the development process/map out the Strategy and Scope Planes.    

- [Basalmiq](https://balsamiq.com/)
    - My wireframes were all built on Balsalmiq.

- [Free Logo Design](https://www.freelogodesign.org/)   
    - My logo was created on this tool.

- [GitPod](https://gitpod.io/)
    - I built the site on **GitPod**

- [GitHub](github.com/)
    - I stored and managed by code on **GitHub**
    - The site is deployed on **GitHub Pages**  
- [GoDaddy]( https://ie.godaddy.com/)
	- The site’s custom domain name: www.lincolnhighwayroadtrip.com is hosted by **GoDaddy**
- [GIMP](https://www.gimp.org/)
    - I edited images on this tool  

<a name="testing"></a>

## Testing 

### Features

#### User story: slideshow

The slideshow was the first part of the homepage I built, and to test out adding it to the site, I started building it based on this [Medium article](https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9) but I eventually switch to following the W3 article mentioned in the Features section. I updated my code for the change in instructions that I was following. 

At one point, I also had JavaScript on the site to highlight an active link in the header. This conflicted with the active class in the slider.js file. I ended up removing this active link feature for unrelated reasons, but had to update the active class in the other JavaScript file to work around this conflict. 

#### User story: information about hotels/restaurants 

The main testing on this feature was on the Read More/Read Less buttons. I originally tried to put the button inside one `<p>` tag so that all content was inside the same `<div>`. This did't work properly because the content above and below the button needed to be in different elements. 

Then, I used a `<span>` to place the hidden content that appears after you click on the Read More button. I wanted to use an `<ul>` to show each suggestion on its own bullet point. This caused an error with my HTML, and I decided to use a `<div>` instead to hold the content. 

I also originally used `<br>` to show a break between bullet points, but this cause some spacing issues on mobile view, and decided to use padding so I could have more control over teh spacing instead. 

Finally, I used a aria-labels to make the map icon that jumps back up to the map more accessible. 

#### User story: History of the Lincoln Highway

To style this page, I wrapped each of the two images on the page in each text section by floating the image into the text. Then I added a Read More/Less section under each text section. Because I didn't properly size the image widths, the images would resize with when the Read More/Less button was clicked and this caused the button to disappear and overflow the page section on smaller screens.

To fix this, I properly sized the images to have `width: auto` and a height sized by percent, depending on the screen size. The images now stay properly sized when the Read/More button is clicked and the button works as expected without overflowing.

#### User story: newsletter/form pop-out

These features use similar code, so I’m going to combine them in the testing section. 

The main difficulty I had with creating the pop-out forms was connecting the forms to EmailJS properly. I followed the instructions from the course on how to add the EmailJS code to the site and even tested this out on a blank workspace to make sure other code on the page wasn’t conflicting. The code from the course video didn’t work at all for me on either form or on the empty workspace. 

In the end, I went through EmailJS’s documentation and found their instructions for connecting a form to EmailJS, and this is what works on my site. 

Next, when I added both the newsletter and the contact forms to the same page, only one form would send to EmailJS. 

After testing this and consulting with my mentor, it turned out that the EmailJS code starts with this function `window.onload = function()` which only works for one JavaScript file connected to EmailJS on a page. 

To fix this, my mentor suggested that I use this code to load the JavaScript files connected to EmailJS individually: `window.addEventListener("load", () => `

Next, I temporarily had a fixed header on the map page and had to move the location of the pop-up form in the modal so that the form wasn't hidden behind the header. I ended up removing the fixed header and using the map icons to jump back up to the top of he page. Both forms load close to the middle of the page instead of teh top on all devices, which looks better on desktop and mobile. So I left the forms in this position. 

Finally, I had to resize the newsletter form on smaller devices using media queries because the form was appaering too small and form content was overflowing from the background on smaller screens. I also adjusted the size of the form on mobile to fully fit the Google reCAPTCHA field. 

I didn't have any problems with adding Sweet Alert to the forms.

#### User story: Search Box

The Search Box started on the page for the main map with the cards and markers, but was moved to a separate Search page. I decided to do this because, even with set map bounds, the Search Box worked inconsistently with the map zoom lower than 10 (the main map uses a zoom of 7 to show the entire state of Pennsylvania).

The JS code for the Search Box was also added to map.js. After testing the Search Box code and the rest of the maps.js code, ruling out each section of the JavaScript piece by piece, my mentor and I realised that the map zoom factor that determines how the search feature works. When the map had a lower zoom, sometimes searches would appear with markers in Knocknacarra instead of Pennsylvania, pulling my location instead of the set bounds. When the map zoom is higher, the Search Box feature shows markers for places in a specific area of Pennsylvania. 

However, the main map requires a lower zoom to show all the specific place markers connected to the map card. To resolve this, we decided to create a new map on a new Search page. The Search Box now works as expected and shows search locations in the map viewport only. 

#### Logo

The logo has a default height and weight set. It's also set to direct to the homepage when clicked on. 

#### Covid travel announcment

The main issue I had with this announcement was when I tried to add a fixed header to the map page. Closing the announcment then caused the banner at the top of the page to partially hide behind the header. 

To fix this, I instead added the anchor links back up to the map with the map icon and removed the fixed header. This map icon/anchor link jump is much neater than using the fixed header and the header dropdown.

#### Bootstrap Nav

The Bootstrap Nav works as expected and was adjusted to have my own page names, links, and anchor links. It folds up behind a hamburger icon on smaller screen sizes to save space in the header. I've also moved the mobile navigation slightly more to the centre of the page to remove some of the blank space. 

The primary testing I did with this navbar was to adjust the anchor links in the dropdown folder so that they work correctly on the live site. I add the page slug then the anchor to fix this issue. 

#### Map with markers and corresponding cards

I tried to follow Google's documentation on how to make the map markers accessible, but their documentation suggested creating an array wth the location name as part of the coordinates for each location. However, this caused all the map markers to disappear from the map. I'd like to take some time in a future version of this project to accurately fix the accessibiity of the map markers. 

Next I had the info windo set to appear with an on click event listener, but decided to use mouseover/mouseout event listeners for the info windows instead. 

Finally I tested out having the map card above and below the map on mobile view and found that it works best with the flow of the site if the card appears below the map on mobile view. 

### Validators

#### CSS

I validated the CSS on [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator). The CSS has no major errors. There are two warnings: 

    220		-webkit-animation-name is an unknown vendor extension
    221		-webkit-animation-duration is an unknown vendor extension

I did some research on this and I've found that these aren't official W3C CSS specifications, but are designed to work on WebKit browsers like Google Chrome and Safari. There's more on this [here](https://www.quackit.com/css/properties/webkit/css_-webkit-animation-name.cfm).

This CSS also came from a W3 Schools lesson, so I've cited this CSS as borrowed code. 

#### HTML 

I used the [W3 validator](https://validator.w3.org/nu/#textarea) to validate my HTML. 

**Home Page**

This page doesn't show any major errors. However, it does show some warnings for my Headings because I used h4 headings in my site footer. I did this so that the bottom of the site would have the smallest heading, but I don't have many other headings on this page because it's mostly images and buttons.

**All other pages**

All the other pages on the site don't through major errors either. The only warnings that appear are for the H1 headings. I used H1 fonts for all the banner areas on the site because these are the main topic of the page. This is the first text on the page, so I think that this text should be marked as the H1 heading. 

Also, I used H1 for the top of my forms, so that this is the first content with information about my forms. I think I can fix these warnings after I make my forms properly accessible to screen readers.

#### JavaScript

I used [JShint](https://jshint.com/) to validate my JavaScript.

The main warning I recieved for my JavaScript was:

	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).

I researched this error and found that this error appears for new ES6 features that may not run on systems that don't support them. This information was found on a [Treehouse forum post](https://teamtreehouse.com/community/why-does-jshint-give-me-these-warnings-about-es6).

I used `// jshint esversion: 6` to work around this error. 

**Slider.js**

This file is showing an error:
    Two Unused Variables:
    6	plusSlides
    10	currentSlide

However, these are both functions, not variables and this code was from a W3 Scools article, so I left it as is on the site.

### Browsers and responsive design

The site looks much the same on Google Chrome, Firefox, and Safari. While building the site, I switched between Firefox and Google Chrome so I could make sure that the styles on both browsers were consistent. I tested the site out on desktop Safari, and it looks much the same, but the navbar is a little more squished than on the other two browsers. This is because Safari on my device loads on a smaller screen thatn Chrome of Firefox.

While working on the mobile version of the site, I deployed it early so that I could test out how it works on my phone. The site resizes well on Safari and Google Chrome on my iPhone SE 2020. 

To build the mobile version of the site, I used both Chrome and Firefox Developer Tools. I created media queries to make the site fully responsive across different mobile phone types in regular mode and landscape mode. I also used media queries to fit the site on iPad and Surface devices on regular and landscape views. 

### Lighthouse

I ran my site through Google Chrome Lighthouse.

All pages on the site have an accessiblity score of over 96 on mobile and desktop. Each page has an SEO score of 100. Finally all pages have a Best Practices score of over 93 on mobile and desktop views.


<a name="deployment"></a>

## Deployment

I used GitHub pages to deploy this project live online. This project was deployed early on so that I could ensure that the live content looks the same as it does on the GitPod preview. 

To do this I:

1. Logged into my GitHub account
2. Opened my repository for lincoln-highway-road-trip
3. Went to the Settings tab of my repository
4. In the Options tab of the Settings, went to the GitHub Pages section
5. Selected Master as the Source from a dropdown
6. Selected the /(root) folder
7. Clicked Save 

Then I connected my custom domain name by typing in my full domain name, including teh wwww subdomain and clicking Save. 

I added the custom DNS records from GitPod to the DNS panel on GoDaddy's end. [These steps](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) from GitHub Pages' documentation walks you through how to connect the apex domain and the required DNS records.

Finally, I created a CNAME file in my respository to complete the connection and waited 24 hours for the SSL certificate to generate. 

This CNAME file created a conflict with my original workspace, which I wasn't able to pull through on GitPod. To fix this, I created a new GitPod workspace and was able to push new updates as expected. 

The live site can now be accessed live online at: wwww.lincolnhighwayroadtrip.com

<a name="credits"></a>

## Credits

### Text content sources 

**Content for the About the Lincoln Highway page**

https://uncoveringpa.com/lincoln-highway-experience

https://www.lincolnhighwayassoc.org/

https://www.fhwa.dot.gov/infrastructure/lincoln.cfm

https://eu.usatoday.com/story/travel/destinations/2013/07/05/lincoln-highway-100th-anniversary-transcontinental-road/2491097/

https://lhhc.org/lincoln-highway-experience/visit.html

https://en.wikipedia.org/wiki/Lincoln_Highway

https://en.wikipedia.org/wiki/Pennsylvania

https://www.britannica.com/place/Pennsylvania-state


### Location sections sources

**Pittsburgh**

https://www.visitpittsburgh.com/plan-your-trip/

https://en.wikipedia.org/wiki/Pittsburgh

https://theculturetrip.com/north-america/usa/pennsylvania/articles/where-to-eat-in-pittsburgh-pa-the-10-best-local-restaurants/

**Fallingwater**

https://en.wikipedia.org/wiki/Fallingwater

https://fallingwater.org/what-is-fallingwater/

https://www.golaurelhighlands.com/

**Bedford**

https://en.wikipedia.org/wiki/Bedford,_Pennsylvania

https://www.travelawaits.com/2496410/how-to-spend-a-weekend-in-bedford-pa/

**Gettysburg**

https://uncoveringpa.com/things-to-do-in-gettysburg-pa

https://destinationgettysburg.com/

https://www.nps.gov/gett/index.htm

**Harrisburg**

https://selectregistry.com/blog/things-to-do-in-harrisburg-pa/

https://www.visithersheyharrisburg.org/about/

**Lancaster**

https://fultonsteamboatinn.com/the-history-of-steamboats/

https://www.discoverlancaster.com/blog/10-reasons-to-visit-downtown-lancaster-pa/

https://www.discoverlancaster.com/blog/forbes-10-coolest-u-s-cities-to-visit/

**Philadelphia**

https://www.visitphilly.com/

https://en.wikipedia.org/wiki/Rocky_Steps 

### Images & media

- amish-country.jpg was sourced from Unsplash and taken by [Doug Kelley](https://unsplash.com/@dkphotos)
- bedford.jpg was found on the [Bedford Fall Foliage Festival](https://bedfordfallfoliagefestival.com/) official site
- coffee-pot.jpg is credited to [Joseph](https://www.flickr.com/photos/josepha/) on Flikr
- fallingwater.jpg is from Unsplash by [Kirk Thornton](https://unsplash.com/@kirkthornton)
- fallingwater2.jpg is also from Unsplash by [Cameron Venti](https://unsplash.com/@ventiviews)
- favicon.ico is a general emoji of a road from [favicon.io](https://favicon.io/emoji-favicons/)
- fulton-inn.jpeg comes from the [Fulton Steamboat Inn website](https://fultonsteamboatinn.com/)
- gettysburg.jpg is sourced from freeimages.com by [Eric Nelson](https://www.freeimages.com/photographer/ericnelson-32464)
- gettysburg2.jpg comes from Unsplash by [Timothy Pierce](https://unsplash.com/@tpierce)
- harrisburg-bridge.jpg is an image by [Charles Jackson](https://unsplash.com/@cneasonj) on Unsplash
- harrisburg.jpg is by [Andre Frueh](https://unsplash.com/@andrefrueh) on Unsplash
- historical-postcard.jpg is from a collection of postcards found and reposted by [Kate](https://www.flickr.com/photos/123378252@N05/) on Flickr
- independence-hall.jpg is also from Flickr by [Jonathan](https://www.flickr.com/photos/iceninejon/)
- philadelphia.jpg is by [Chris Murray](https://unsplash.com/@seemurray) on Unsplash
- philly-skyline.jpg is sourced from Pexels by [Sanaan Mazhar](https://www.pexels.com/@sanaan)
- pittsburgh.jpg was taken by [Vidar Nordli-Mathisen](https://unsplash.com/@vidarnm) and sourced from Unsplash
- pittsburgh2.jpg is also from Unsplash, taken by [Guido Coppa](https://unsplash.com/@gcoppa)
- turn-around.gif was sourced from the official Groundhog Day film page on [Giphy](https://giphy.com/groundhogday/)
- windy-roady.jpg is from [Matt Duncan](https://unsplash.com/@foxxmd) on Unsplash

### Acknowledgements

- The Lincoln Highway Heritage Corridor Project and the Lincoln Highway Association for their inspiration and their work on preserving and promoting the highway
- My mentor Excellence Ilesanmi, because I'd be lost without his advice and guidance