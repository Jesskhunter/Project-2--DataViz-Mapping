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
L.circle([-32.1, 117.7167], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);

  L.circle([19.56667, -99.5667], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([24.2, 113.4], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([36.3, 120.4833], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([27.5, -12.5], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([34.46667, -115.233], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([21.49972, 50.47222], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-22.3667, 135.7667], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([35.33333, -109.5], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([28.7, -102.733], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-24.3667, 133.1667 ], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([26.96667, -105.317], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([24.23333, 111.1833], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-14.256, -49.1592], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-16.2667, -47.95], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([19.22778, 56.14278], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([31.71667, -102.4], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([22.01833, 26.08778], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([30.4, -107.8], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([49.96667, 6.53333], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([38.08333, -115.533], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([23.08333, -101.017], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([19.21667, -98.3], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([48.7, 45.7], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([20.6, 44.88333], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-33.6167, 24], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([41.98, -120.542], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-29.5833, 139.9], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([39.68333, -99.8667], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([42.25, 59.2], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([44.43333, 87.63333], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([22.81667, -102.567], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([67.3, 160.8], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-29.4167, -66.85], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([31.85, -110.967], {
    color: "orange",
    fillColor: "orange",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([35.78333, -83.25], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-24.2033, -68.8067], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([68, 128.3], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([13.51667, 122.45], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([5.91667, -73], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([52.5, 30.333333], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([32, -95], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([32.94889, -81.865], {
    color: "orange",
    fillColor: "orange",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-19.3, 127.7667], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-42.9, -71.3333], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-23.9, 151.3], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-29.45, 119.7167], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);

L.circle([54.9, 91.8], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([34.11667, -101.783], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([30.75, -104.25], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([34.7, 117], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([39.78333, -77.2167], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([49.55, 4.86667], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([37.2, -101.35], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-29.4333, -50.9167], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([52.23333, 27.33333], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([53.9, -112.883], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-23, -69], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([46.8, 24.03333], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-29.0333, -50.9167], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([48.0667, 35.0833], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-76.7167, 159.667], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([36.0667, -90.5], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([17.53333, -97.35], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([35.8, -113.7], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([20.51667, 56.6666699999999], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([35.98333, -101.5], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([29.66667, -111.5], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([48.48333, 3.58333], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-6.6, 110.73333], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-28.23333, 120.85], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-33.11667, -60.9666699999999], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-22.61667, 135.2], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([57.78333, 55.26667], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([48.9, 22.4], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([48.9, 22.4], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-7.56666999999999, 110.83333], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-31.3833299999999, 125.63333], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([43.36667, -88.13333], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([27.71667, -0.25], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([35.16667, -107.88333], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([39.5, -112.9], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([-28.83333, 21.1333299999999], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([19.7, 55.73333], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([39.93333, -99.6], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 100000
  }).addTo(map);
L.circle([39.93333, -99.6], {
    color: "green",
    fillColor: "green",
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