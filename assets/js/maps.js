function initMap() {
     var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 52.3702,
            lng: 4.8952
        }
    });  
        
    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
        
    var locations = [
            {lat: 52.365725, lng:  4.898550},  
            {lat: 52.341446, lng:  4.890543}, 
            {lat: 52.370515, lng:  4.899793}  
    ];
            
    var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
    var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            
 }