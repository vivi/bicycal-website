function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(37.869821, -122.259766),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.869821, -122.259766),
        map: map,
    });
    var map = new google.maps.Map(mapCanvas, mapOptions);
    marker.setMap(map);
}
