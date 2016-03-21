//25.77759,-80.191225 (wolfson) and 25.877062,-80.246993 (north)

$(document).ready(function (){

  // create a LatLng object containing the coordinate for the center of the map
  var latlng1 = new google.maps.LatLng(25.77759,-80.191225);

  //north campus
  var latlng2 = new google.maps.LatLng(25.877062,-80.246993);

  //center point
  var centerpt = new google.maps.LatLng(25.8297911,-80.2202138);

  // prepare the map properties
  var options = {
    zoom: 12,
    center: centerpt,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map = new google.maps.Map(document.getElementById('map'), options);

  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng1, map: map
  });

  // marker for north campus
  var marker2 = new google.maps.Marker({
    position: latlng2, map: map
  });

  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(map, marker1);
  });

   // listener for north campus
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(map, marker2);
  });

  // add information window
  var infowindow1 = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>Miami Dade College - Wolfson Campus</strong><br><br>300 NE 2nd Ave<br>Miami, FL 33132</div>'
  });

  // add information window
  var infowindow2 = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>Miami Dade College - North Campus</strong><br><br>11380 NW 27th Ave<br>Miami, FL 33167</div>'
  });
});
