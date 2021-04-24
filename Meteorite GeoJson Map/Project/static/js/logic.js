// Create Backround tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 16,
	accessToken: API_KEY
});

// Second Tile Layer
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 16,
	accessToken: API_KEY
});

// Third Tile Layer
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 16,
	accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40.5, -94.5],
	zoom: 2,
	layers: [streets]
});

//marker
L.circle([32.7767, -96.7979], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);
  
L.circle([76.133, -64.9333], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

L.circle([-27.4666, -60.5833], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

L.circle([35.0500, -111.033], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);
  
L.circle([47.0000, 88.0000], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

L.circle([-25.5000, 18.0000], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

L.circle([27.0000, -105.10000], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

L.circle([-30.7833, 127.5500], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

L.circle([47.1600, 134.6533], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

L.circle([26.2000, -107.8333], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

// Create marker
L.circle([-9.1166, 33.066], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

// Create marker
L.circle([45.3666, -122.833], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

// Create marker
L.circle([27.050000, -105.4333], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

// Create marker
L.circle([25.10000, 107.7000], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

// Create marker
L.circle([-38.10000, 145.3000], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

// Create marker
L.circle([-26.2166, -48.60000], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

// Create marker
L.circle([-10.1166, -39.20000], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

// Create marker
L.circle([37.58250, -99.163], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

// Create marker
L.circle([44.05000, 126.166], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

// Create marker
L.circle([-25.7500, -70.5000], {
	color: "red",
	fillColor: "red",
	fillOpacity: 0.75,
	radius: 100000
  }).addTo(map);

// Base Layer
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets,
  "Dark": dark
};

// Data layer
let allMeteorites = new L.LayerGroup();


// Overlay
let overlays = {
  "Meteorites": allMeteorites,
};

// Layer Controls
L.control.layers(baseMaps, overlays).addTo(map);

// // Retrieve the meteorite GeoJSON data.
// d3.json("https://data.nasa.gov/resource/gh4g-9sfh.geojson").then(function(data) {

//   // This function returns the style data for each of the earthquakes we plot on
//   // the map. We pass the magnitude of the earthquake into two separate functions
//   // to calculate the color and radius.
//   function styleInfo(feature) {
//     return {
//       opacity: 1,
//       fillOpacity: 1,
//       fillColor: getColor(feature.properties.mass),
//       color: "#000000",
//       radius: getRadius(feature.properties.mass),
//       stroke: true,
//       weight: 0.5
//     };
//   }

//   // This function determines the color of the marker based on the magnitude of the earthquake.
//   function getColor(mass) {
//     if (mass > 100) {
//       return "#ea2c2c";
//     }
//     if (mass > 4) {
//       return "#ea822c";
//     }
//     if (mass > 3) {
//       return "#ee9c00";
//     }
//     if (mass > 2) {
//       return "#eecc00";
//     }
//     if (mass > 1) {
//       return "#d4ee00";
//     }
//     return "#98ee00";
//   }

//   // This function determines the radius of the earthquake marker based on its magnitude.
//   // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
//   function getRadius(mass) {
//     if (mass === 0) {
//       return 1;
//     }
//     return mass * 4;
//   }

//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//     	// We turn each feature into a circleMarker on the map.
//     	pointToLayer: function(feature, latlng) {
//       		console.log(data);
//       		return L.circleMarker(latlng);
//         },
//       // We set the style for each circleMarker using our styleInfo function.
//     style: styleInfo,
//      // We create a popup for each circleMarker to display the magnitude and location of the earthquake
//      //  after the marker has been created and styled.
//      onEachFeature: function(feature, layer) {
//       layer.bindPopup("Magnitude: " + feature.properties.fall + "<br>Location: " + feature.properties.name);
//     }
//   }).addTo(allMeteorites);

//   // Then we add the earthquake layer to our map.
//   allMeteorites.addTo(map);

// });