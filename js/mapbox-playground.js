const mapboxToken = 'pk.eyJ1IjoicWV0YSIsImEiOiJja3BwbmZneTQwMDNuMndtdXo2YXVsMmNvIn0.JiVYPc4wJTvxv98mgPe3aA';
mapboxgl.accessToken = mapboxToken;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-71.0589, 42.3601],
    zoom: 12,
});
// call function to create method and give initial point
let marker = setMarker([-71.0589, 42.3601]);

// call addMapEvent AFTER the marker has been initially set
addMapEvent(marker);

// create new geocoder and assign to variable
let geocoder = setGeocoder()
addGeocoderToMap(geocoder);
setPopup('this is my popup')

// creates and returns a new GeoCoder (search box)
function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

//adds GeoCoder to Map
function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}

//adds event listener to geocoder and sets new marker location
function addGeocoderEvent(geocoder){
    geocoder.on("result", function(e){
        console.log(e);
        marker.setLngLat(e.result.geometry.coordinates)

        setPopup(e.result.name);
    })
}

// creates the marker
function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

//adds event to map that changes location of marker
//based on where the user clicks
function addMapEvent() {
    map.on('click', function (e) {
        console.log(e.lngLat);
        marker.setLngLat(e.lngLat)
            .addTo(map)
    })
}

function setPopup(textDetails){
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);

    marker.setPopup(popup);
}