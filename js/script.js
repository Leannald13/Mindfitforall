

function initMap () {
    var options = {
        zoom:14,
        center:{lat: 52.127066,lng: -0.215195}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
        position: {lat: 52.127066,lng: -0.215195},
        map:map
    })
}