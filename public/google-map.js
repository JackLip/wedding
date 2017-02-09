function initMap() {
    var myCenter = new google.maps.LatLng(48.818221, 23.446249);
    var mapCanvas = document.getElementById("map");
    var mapOptions = { center: myCenter, zoom: 5 };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({ position: myCenter });
    marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function () {
        map.setZoom(9);
        map.setCenter(marker.getPosition());
    });
}
