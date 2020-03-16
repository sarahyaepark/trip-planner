const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

// console.log('+++++++ this is being called', newMarker);

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFnZW5nYXJ5cCIsImEiOiJjazd1b3h6djEwMDZhM2xxbGI1d201dTh1In0.WGUQmIVGx5_nJm40m401qg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const newMarker = buildMarker("activities", [-74.009, 40.705]);

newMarker.addTo(map);
