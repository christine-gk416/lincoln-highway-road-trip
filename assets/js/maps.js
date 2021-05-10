function initAutocomplete() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7.25, 
    center: {
    lat: 40.58, 
    lng: -77.57,},
    mapId: "1a97cdea16f163b5",
  }); 

  let defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(39.71, -80.51),
    new google.maps.LatLng(40.51, -74.41),
  );   

  let options = {
    bounds: defaultBounds,
    types: ["geocode"],
    componentRestrictions: {country: "us"}
  };
       
  let input = document.getElementById("map-search");
  let searchBox = new google.maps.places.SearchBox(input, options);

  google.maps.event.addListener(map, "bounds_changed", function() {
    searchBox.setBounds(map.getBounds());
  });
    
  let searchMarkers = [];
    
  searchBox.addListener("places_changed", function() {
    let places = searchBox.getPlaces();
      if(places.length == 0) {
        return;
      }
    
    searchMarkers.forEach(function(marker) {
      marker.setMap(null);
    });
    
    searchMarkers = [];
    
    let bounds = new google.maps.LatLngBounds();

    places.forEach(function(place) {
      if(!place.geometry) {
        return;
      }

        let icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
    
        searchMarkers.push(new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        }));
            
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
          }
    });
    map.fitBounds(bounds);
  });

  const markers = [
    {coords: {lat: 40.44, lng: -79.99}, 
      content: "<h3>Pittsburgh</h3><p>Start here! &#128664</p>",
      info: 
            `<h2>Pittsburgh</h2>
            <p>Start your trip in Pittsburgh, the second largest city in Pennsylvania. 
            This city is located in the far southwestern part of the state, on the Allegheny plateau. 
            Many of its distinctive neighborhoods are built right into the these mountainous foothills. 
            Other parts of Pittsburgh are shaped around its iconic three rivers: the Ohio, Monongahela, and Allegheny. 
            Pittsburgh was once one of the most industrialised cities in the world, but in the post-industrial era it 
            has focused on becoming a hub of higher education. 
            With the Andy Warhol and Carnegie museums located in the city, Pittsburgh is also considered an artistic 
            stronghold in Pennsylvania. 
            It’s regularly listed as the most livable city in the US. 
            </p>
            <br>
            <a href="#Pittsburgh" class="read-more-btn">More info</a>`
    },

    {coords: {lat: 39.906, lng: -79.467},
      content: "<h3>Fallingwater</h3>",
      info: 
            `<h2>Fallingwater</h2>
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
            <a href="#Fallingwater" class="read-more-btn">More info</a>`
    },

    {coords: {lat: 40.022899, lng: -78.517347},
      content: "<h3>Bedford</h3>",
      info: 
            `<h2>Bedford</h2>
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
            <a href="#Bedford" class="read-more-btn">More info</a>`
    },

    {coords: {lat: 39.8121605, lng: -77.2216721},
      content: "<h3>Gettysburg</h3><p>&#128123</p>",
      info: 
            `<h2>Gettysburg</h2>
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
            <a href="#Gettysburg" class="read-more-btn">More info</a>`
    },

    {coords: {lat: 40.259590, lng: -76.881866},
      content: "<h3>Harrisburg</h3>",
      info: 
            `<h2>Harrisburg</h2>
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
            <a href="#Harrisburg" class="read-more-btn">More info</a>`
    },

    {coords: {lat: 40.03, lng: -76.30},
      content: "<h3>Lancaster</h3>",
      info: 
            `<h2>Lancaster</h2>
            <p>Test</p>
            <a href="#Lancaster" class="read-more-btn">More info</a>`
    },

    {coords: {lat: 39.9526, lng: -75.1652}, 
      content: "<h3>Philadelphia</h3><p>End here &#128075</p>",
      info: 
            `<h2>Philadelphia</h2>
            <p>Test</p>
            <a href="#Philadelphia" class="read-more-btn">More info</a>`
    },
  ];

  for(var i = 0; i< markers.length; i++){
    addMarker(markers[i]);
  };

  function addMarker (props){
    let image = "http://maps.google.com/mapfiles/kml/paddle/red-stars.png";
    let marker = new google.maps.Marker({
      position: props.coords, 
      icon: image,
      map: map  
  });

  if(props.content){
    var infoWindow = new google.maps.InfoWindow({
      content: props.content
  });
  
  marker.addListener("mouseover", function(){
    infoWindow.open(map, marker);  
  }); 

  marker.addListener("mouseout", function(){
    infoWindow.close(map, marker);  
  });

  google.maps.event.addListener(marker, "click", (function(i) {
    return function() {
      document.getElementById("sideCard").innerHTML = markers[i].info;
      }
      })(i));

    }    
  };
};

document.addEventListener("DOMContentLoaded", function(event) {
  initAutocomplete();
});