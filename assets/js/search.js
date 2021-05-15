//Note: much of the code for this slideshow comes directly from the Google Places API documentation cited in my ReadMe for this feature


function initAutocomplete() {

  // Add a variable that creates the map on the Lincoln Highway Map page, sets the zoom, centers the map, and styles it using Google Maps JS

  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.44, lng: -79.99 },
    zoom: 12,
    mapId: "1a97cdea16f163b5",
  });

  // Create the search box and connect it to the map-search ID
  const input = document.getElementById("map-search");
  const searchBox = new google.maps.places.SearchBox(input);

  // Limit Search Box results to map's viewport

  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let searchMarkers = [];

  // Listen for when the user selects a search prediction and get more details for that place

  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.

    searchMarkers.forEach((searchMarker) => {
      searchMarker.setMap(null);
    });
    searchMarkers = [];

    // Show the the icon, name and location for each place

    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      // Create a marker for each place

      searchMarkers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

      if (place.geometry.viewport) {

        // Only geocodes have viewport

        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
// Load map after the initial HTML document and before stylesheets and images

document.addEventListener("DOMContentLoaded", function (event) {
  initAutocomplete();
});
