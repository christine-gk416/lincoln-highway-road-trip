function initMap() {
    const options = {
        zoom: 7.25, 
        center: {
            lat: 41.2033, 
            lng: -77.1945,
        },
        mapId: "1a97cdea16f163b5",} 

    const map = new google.maps.Map(document.getElementById("map"), options);


    const markers = [
        {coords: {lat: 40.440624, lng: -79.995888},  
        content: '<h3>Pittsburgh</h3><p>Start here! &#128664</p>',
        info: 
            `<h2>Pittsburgh</h2>
            <br>
            <p>Sit amet, consectetur adipiscing elit. 
            Nunc vitae rhoncus neque, a mattis nulla. 
            Mauris vel mi cursus purus maximus fermentum. 
            Praesent pulvinar finibus mauris quis suscipit. 
            Fusce volutpat vehicula augue, a finibus orci cursus pretium. 
            Aliquam interdum magna aliquet urna interdum porta. 
            Aliquam volutpat erat id elit fringilla ullamcorper. </p>
            <br>
            <a href="#Pittsburgh" class="read-more-btn">More info</a>`
        },

        {coords: {lat: 39.906113, lng: -79.468056},
        content: '<h3>Fallingwater</h3>',
        info: 
            `<h2>Fallingwater</h2>
            <p>Test</p>
            <a href="#Fallingwater" class="read-more-btn">More info</a>`
        },

        {coords: {lat: 40.022899, lng: -78.517347},
        content: `<h3>Bedford</h3>`,
        info: 
            `<h2>Bedford</h2>
            <p>Test</p>
            <a href="#Bedford" class="read-more-btn">More info</a>`
        },

        {coords: {lat: 39.8121605, lng: -77.2216721},
        content: `<h3>Gettysburg</h3><p>&#128123</p>`,
        info: 
            `<h2>Gettysburg</h2>
            <p>Test</p>
            <a href="#Gettysburg" class="read-more-btn">More info</a>`
        },

        {coords: {lat: 40.259590, lng: -76.881866},
        content: `<h3>Harrisburg</h3>`,
        info: 
            `<h2>Harrisburg</h2>
            <p>Test</p>
            <a href="#Harrisburg" class="read-more-btn">More info</a>`
        },

        {coords: {lat: 40.0213909, lng: -76.191827},
        content: `<h3>Lancaster</h3>`,
        info: 
            `<h2>Lancaster</h2>
            <p>Test</p>
            <a href="#Lancaster" class="read-more-btn">More info</a>`
        },

        {coords: {lat: 39.9526, lng: -75.1652}, 
        content: `<h3>Philadelphia</h3><p>End here &#128075</p>`,
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
        var image = 'http://maps.google.com/mapfiles/kml/paddle/red-stars.png';
        var marker = new google.maps.Marker({
            position: props.coords, 
            icon: image,
            map: map  
        });

        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
              content: props.content
            });
  
            marker.addListener('mouseover', function(){
                infoWindow.open(map, marker);  

            }); 

            marker.addListener('mouseout', function(){
                infoWindow.close(map, marker);  

            });

            google.maps.event.addListener(marker, 'click', (function(i) {
                return function() {
                    document.getElementById('sideCard').innerHTML = markers[i].info;
                }
            })(i));

        
        }    
            
           
    };  
};


