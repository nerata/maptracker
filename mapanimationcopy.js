// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-155.9962,19.6419],
  [-156.0063,19.8107],
  [-155.6628,20.0173],
  [-155.5928,20.1140],
  [-155.1522,19.8539],
  [-155.1094,19.7193],
  [-155.2885,19.4194],
  [-155.6833,18.9136],
  [-155.9259,19.4782],
  [-155.4694,19.8230],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoicmVuYXRhaiIsImEiOiJjbGRhODBidXUwZ2c3M3Bqd2M1dThmY3dsIn0.M8hlT3jzflxVRc5DDLNXMQ';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-155.1522,19.8539],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker()
    .setLngLat([-155.1522,19.8539])
    .addTo(map);

// counter here represents the index of the current bus stop
var counter = 0;
function move(){
  setTimeout(() =>{
    if(counter >=busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  },1000);



  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}
