function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function determine_closest(position) {

    //use lat long against an array of uni positions to get nearest campus
    var uni_coords = new Array();
    uni_coords.push({location:"ballarat", lat:-37.5592153, long:143.8626583});
    uni_coords.push({location:"churchill", lat:-38.311211, long:146.429409});
    uni_coords.push({location:"horsham", lat:-36.712149, long:142.18545});

    var shortest_distance = -1;
    for (var i = 0; i < uni_coords.length; i++) {
        if (distance < shortest_distance) shortest_distance = i;
        distance = getDistanceFromLatLonInKm (position.coords.latitude, position.coords.longitude, uni_coords[i].lat, uni_coords[i].long);
        console.log(distance);
    }


    //change selection in dropdown to change campus

    //call drop down change event to filter results

    $('.position').html("Latitude: " + position.coords.latitude +   "<br>Longitude: " + position.coords.longitude); 
}