var map;
var myOptions = {
    zoom: 12,
    center: new google.maps.LatLng(25.8404931, -80.2202774),
    mapTypeId: 'terrain'
};
map = new google.maps.Map($('#map')[0], myOptions);

var addresses = ['300 NE 2nd Ave, Miami, FL 33132', '11380 NW 27th Ave, Miami, FL 33167'];

var contentStringw = '<h4>Miami Dade College Wolfson Campus</h4>'+
      '<p>300 NE 2nd Ave, Miami FL 33132</p>';
var contentStringn = '<h4>Miami Dade College North Campus</h4>'+
      '<p>11380 NW 27th Ave, Miami, FL 33167</p>';

// put this in a loop to check which address it is and change the content: depending

var infowindow = null;

infowindow = new google.maps.InfoWindow({
  content: "holding..."
});

for (var x = 0; x < addresses.length; x++) {
    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
        var p = data.results[0].geometry.location
        // var latlng = new google.maps.LatLng(p.lat, p.lng);
        // var marker = new google.maps.Marker({
        //     position: latlng,
        //     map: map
        // });

        // marker.addListener('click', function() {
        //   infowindow.open(map, marker);
        // });

        for (var i = 0; i < addresses.length; i++) {
        var marker = addresses[i];
        google.maps.event.addListener(marker, 'click', function () {
        // where I have added .html to the marker object.
        infowindow.setContent(this.html);
        infowindow.open(map, this);
        });
}

    });
}
