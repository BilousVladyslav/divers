function initMap() {
  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  var zoom = 5;
  if (screen.width > 800) zoom = 6;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoom,
    center: new google.maps.LatLng(49.154857, 31.643580),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    fullscreenControl: false,
    streetViewControl: false,
    scrollwheel: false,
    mapTypeControl: false
  });

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      icon: {
        url: locations[i][3],
        scaledSize: new google.maps.Size(34, 38)
      }
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
      }
    })(marker, i));
  };
}
