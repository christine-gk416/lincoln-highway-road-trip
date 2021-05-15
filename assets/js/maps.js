function initMap() {

  // Add a variable that creates the map on the Lincoln Highway Map page, sets the zoom, centers the map, and styles it using Google Maps JS

  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7.25,
    center: {
      lat: 40.58,
      lng: -77.57,
    },
    mapId: "1a97cdea16f163b5",
  });

  // Create variables for the map marker coordinates, the info window content, and the content on the map cards

  const markers = [

    // Pittsburgh

    {
      coords: { lat: 40.44, lng: -79.99 },
      content: "<h3>Pittsburgh</h3><p>Start here! &#128664</p>",
      info: `<h2>Pittsburgh</h2>
            <p>
            Start your trip in Pittsburgh, the second largest city in Pennsylvania. 
            This city is located in the far southwestern part of the state, on the Allegheny plateau. 
            Many of its distinctive neighborhoods are built right into the these mountainous foothills. 
            Other parts of Pittsburgh are shaped around its iconic three rivers: the Ohio, Monongahela, and Allegheny. 
            Pittsburgh was once one of the most industrialised cities in the world, but in the post-industrial era it 
            has focused on becoming a hub of higher education. 
            </p>
            <p>
            <br>
            With the Andy Warhol and Carnegie museums located in the city, Pittsburgh is also considered an artistic 
            stronghold in Pennsylvania. 
            It’s regularly listed as the most livable city in the US. 
            </p>
            <br>
            <a href="#Pittsburgh" class="read-more-btn">More info</a>`,
    },

    // Fallingwater

    {
      coords: { lat: 39.906, lng: -79.467 },
      content: "<h3>Fallingwater</h3>",
      info: `<h2>Fallingwater</h2>
            <p>This iconic house was built by one of America’s most famous architects. 
            Fallingwater was built between 1933-38 for the Kaufmann family, 
            the owners of a prominent department store chain in Pittsburgh. 
            The house was built atop of a waterfall, so that its foundation rises above the falling water. 
            It seamlessly blends into the forest and the hills around the building, with a minimalist, 
            modern style characteristic of Wright’s design.
            </p>
            <br>
            <p>
            Today, the house is open to the public as a museum and the land it’s on is a nature reserve (Bear Run). 
            In 2019, Fallingwater house was added to the list of UNESCO world heritage sites. 
            </p>
            <br>
            <a href="#Fallingwater" class="read-more-btn">More info</a>`,
    },

    // Bedford

    {
      coords: { lat: 40.022899, lng: -78.517347 },
      content: "<h3>Bedford</h3>",
      info: `<h2>Bedford</h2>
            <p>
            Bedford is a small town tucked into the Allegheny mountains. 
            If you’re there in the autumn, the trees will be alive with changing colours and there’s a fall foliage festival to celebrate. 
            Any other time of year, Bedford has an outsized history. 
            President George Washington spent some time there while quelling the whisky rebellion and the first president from Pennsylvania, 
            James Buchanon spent his summers at the Bedford Springs Hotel. 
            The town is still renowned for its spirits (though mostly beer these days) and nearby hot spring spas. 
            </p>
            <br>
            <p>
            But for passing through on a road trip, the key stop in Bedford is to The Coffee Pot. 
            Built in 1927 as a diner, this coffee pot-shaped building still stands in the town. 
            It’s closed now, but is still full of potential for photographs.
            </p>
            <br>
            <a href="#Bedford" class="read-more-btn">More info</a>`,
    },

    // Gettsburg 

    {
      coords: { lat: 39.8121605, lng: -77.2216721 },
      content: "<h3>Gettysburg</h3><p>&#128123</p>",
      info: `<h2>Gettysburg</h2>
            <p>
            The site of one of the bloodiest and northern-most battles of the American Civil War, is a must-see to learn about the darker parts of American history. 
            Gettysburg town is situated down the road from the battlefield, which makes it a hot-spot for ghosts. 
            If you go after dark, you can take a haunted tour of the city. Or if you go visit during the day, you can visit the battlefield itself. 
            The entire battlefield is now a National Park, which you can explore at your leisure or with a park ranger as a tour guide. 
            The most iconic part of the field, Devil’s Den, is a harrowing reminder of the cost of war. 
            </p>
            <br>
            <p>
            The town also has a robust shopping and antiques district, as well as wine/craft beer and food tours. 
            </p>
            <br>
            <a href="#Gettysburg" class="read-more-btn">More info</a>`,
    },

    // Harrisburg

    {
      coords: { lat: 40.25959, lng: -76.881866 },
      content: "<h3>Harrisburg</h3>",
      info: `<h2>Harrisburg</h2>
            <p>
            The capitol city and the third largest in Pennsylvania. 
            Harrisburg is built along the Susquehanna river, a wide and enchanting river that flows into the Chesapeake Bay. 
            One of the best places to visit in Harrisburg is the River Front park, which has a walking bridge that takes you 
            to the City Island leisure centre. You can take in a baseball game, play a round of miniature golf, 
            or take a ride on the red and white paddle-wheel river boat the Pride of the Susquehanna on City Island.
            </p>
            <br>
            <p>
            Harrisburg’s midtown is its cultural hub where you can find restaurants, bars, coffee shops, and more. 
            The keystone of midtown is the Midtown Scholar Bookshop, which is run by the city’s mayor. 
            </p>
            <br>
            <a href="#Harrisburg" class="read-more-btn">More info</a>`,
    },

    // Lancaster

    {
      coords: { lat: 40.03, lng: -76.3 },
      content: "<h3>Lancaster</h3>",
      info: `<h2>Lancaster</h2>
            <p>
            The first stop here in Lancaster county is to the Fulton Steamboat Inn. 
            This hotel is designed to look like a real steam boat, and was built in honor of Robert Fulton, 
            the engineer who made steamboats a commercial success in the late 19th century. Fulton was born in Lancaster. 
            </p>
            <br>
            <p>
            Continuing down route 30 from the hotel, through Amish country, you’ll head into Lancaster city. 
            This city was the capitol city of the United States for one day 1777. Today, it’s one of the best preserved in-land historical city. 
            The history is only part of what makes this little city so cool. Lancaster has a thriving arts and theatre scene on Gallery Row, and is on the rise 
            with its eclectic cuisine and craft breweries. 
            </p>
            <br>
            <a href="#Lancaster" class="read-more-btn">More info</a>`,
    },

    // Philadelphia

    {
      coords: { lat: 39.9526, lng: -75.1652 },
      content: "<h3>Philadelphia</h3><p>End here &#128075</p>",
      info: `<h2>Philadelphia</h2>
            <p>
            Final stop on this road trip is Pennsylvania’s largest city. 
            Philadelphia is the birthplace of the US, and it’s earned that reputation. 
            Old city Philly is the home of Independence Hall, where the Declaration of Independence was signed, 
            and the Continental Congresses formed the US government. 
            Nearby is the Liberty Bell and Ben Franklin’s house. 
            </p> 
            <br>
            <p>
            For lunch, head over to the food hall at Reading Terminal Market, 
            then sit over by the large rise of city hall. Behind city hall is the Benjamin Franklin Parkway, 
            which is lined with every world flag. If you continue down the Parkway, you’ll find a long row of art, science, and history museums. 
            The Philadelphia Museum Art is at the end of the Parkway. Here, you can run up the 72 steps from Rocky and take a picture with a bronze Sylvester Stallone. 
            </p>
            <br>
            <a href="#Philadelphia" class="read-more-btn">More info</a>`,
    },
  ];

  // Loop through the map markers

  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // Create map markers with custom image icon

  function addMarker(props) {
    let image = "https://maps.google.com/mapfiles/kml/paddle/red-stars.png";
    let marker = new google.maps.Marker({
      position: props.coords,
      icon: image,
      map: map,
    });

    // Create info window that appears with the map markers

    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      // Show info window on mouseover

      marker.addListener("mouseover", function () {
        infoWindow.open(map, marker);
      });

      // Hide info window on mouseout

      marker.addListener("mouseout", function () {
        infoWindow.close(map, marker);
      });

      // Change the HTMl content for the sidecard beside the map when the corresponding marker is clicked on

      google.maps.event.addListener(
        marker,
        "click",
        (function (i) {
          return function () {
            document.getElementById("sideCard").innerHTML = markers[i].info;
          };
        })(i)
      );
    }
  }
}

// Load map after the initial HTML document and before stylesheets and images

document.addEventListener("DOMContentLoaded", function (event) {
  initMap();
});
