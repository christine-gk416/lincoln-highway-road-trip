window.onload = function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6.5, 
        center: {
            lat: 41.2033, 
            lng: -77.1945,
        }
    });

    var labels = 1234;

    var locations = [
        {lat: 39.906113, lng: -79.468056},
        {lat: 40.022899, lng: -78.517347},
        {lat: 39.8121605, lng: -77.2216721},
        {lat: 40.0213909, lng: -76.191827},
    ]

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location, 
            label: labels[i % labels.length]
        })
    })

    new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
}