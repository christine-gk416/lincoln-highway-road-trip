window.onload = function initMap() {
    let options = {
        zoom: 7.25, 
        center: {
            lat: 41.2033, 
            lng: -77.1945,
        },
        mapId: "1a97cdea16f163b5",
    };

    let map = new google.maps.Map(document.getElementById("map"), options);

    var labels = 1234;

    var locations = [
        {lat: 40.440624, lng: -79.995888},
        {lat: 39.906113, lng: -79.468056},
        {lat: 40.022899, lng: -78.517347},
        {lat: 39.8121605, lng: -77.2216721},
        {lat: 40.259590, lng: -76.881866},
        {lat: 40.0213909, lng: -76.191827},
        {lat: 39.9526, lng: -75.1652},
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