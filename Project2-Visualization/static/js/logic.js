function createMap(landings) {
  // Create the tile layer that will be the background of our map
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });
  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Light Map": lightmap
  };
  // Create an overlayMaps object to hold the bikeStations layer
  var overlayMaps = {
    "mLandings": mlandings
  };
  // Create the map object with options
  var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 2,
    layers: [lightmap, mlandings]
  });
  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}
function createMarkers(response) {
  console.log(response)
  // Pull the "stations" property off of response.data
  var landings = response.landings;
  // Initialize an array to hold bike markers
  var meteoriteMarkers = [];
  // Loop through the stations array
  for (var index = 0; index < landings.length; index++) {
    var landing = landings[index];
    // For each station, create a marker and bind a popup with the station's name
    var meteoriteMarker = L.marker([landing.latitude, landing.longitude])
      .bindPopup("<h3>" + landing.name + "<h3><h3>Capacity: " + landing.mass + "</h3>");
    // Add the marker to the bikeMarkers array
    meteoriteMarkers.push(meteoriteMarker);
  }
  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(meteoriteMarkers));
}
// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
d3.json("/meteoritedata", function(d){
  console.log(d)
  createMarkers(d)
});

/// Rewrite the createMarkers function to  match the data that came in our Array. 