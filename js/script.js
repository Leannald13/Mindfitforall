var contentString = '<h5>Potton, Sandy, SG19 UK <br>contact@mindfitforall.org<br>07841332552</h5>'

function initMap () {
    var options = {
        zoom:14,
        center:{lat: 52.127066,lng: -0.215195}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
        position: {lat: 52.127066,lng: -0.215195},
        map:map
    
    });

    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}