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
        content: '<h3>Pittsburgh</h3>',
        info: 
            `<h2>Test</h2>
            <p>Test</p>
            <a>Test</a>`
        },

        {coords: {lat: 39.906113, lng: -79.468056},
        content: '<h3>Fallingwater</h3>',
        info: 
            `<h2>Test</h2>
            <p>Test</p>
            <a>Test</a>`
        },

        {coords: {lat: 40.022899, lng: -78.517347},
        content: `<h3>Bedford</h3>`,
        info: 
            `<h2>Test</h2>
            <p>Test</p>
            <a>Test</a>`
        },

        {coords: {lat: 39.8121605, lng: -77.2216721},
        content: `<h3>Gettysburg</h3>`,
        info: 
            `<h2>Test</h2>
            <p>Test</p>
            <a>Test</a>`
        },

        {coords: {lat: 40.259590, lng: -76.881866},
        content: `<h3>Harrisburg</h3>`,
        info: 
            `<h2>Test</h2>
            <p>Test</p>
            <a>Test</a>`
        },

        {coords: {lat: 40.0213909, lng: -76.191827},
        content: `<h3>Lancaster</h3>`,
        info: 
            `<h2>Test</h2>
            <p>Test</p>
            <a>Test</a>`
        },

        {coords: {lat: 39.9526, lng: -75.1652}, 
        content: `<h3>Philadelphia</h3>`,
        info: 
            `<h2>Test</h2>
            <p>Test</p>
            <a>Test</a>`
        },
    ];

    for(var i = 0; i< markers.length; i++){
        addMarker(markers[i]);
    };

    function addMarker (props){
        var marker = new google.maps.Marker({
            position: props.coords, 
            map: map,
        });

        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
              content:props.content
            });
  
            marker.addListener('mouseover', function(){
                infoWindow.open(map, marker);  

                google.maps.event.addlistener(marker, 'mouseout', function(){
                    infoWindow.close(map, marker); 
                });

            }); 
            
        
        }  
            
    };  
};


