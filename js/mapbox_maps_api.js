const mapBoxToken = "pk.eyJ1IjoicWV0YSIsImEiOiJja3ByMXUxdXkwYWw3MnF2emo1cXZhNXBqIn0.CcxqefsByplrICyCtfeZrQ"
mapboxgl.accessToken = mapBoxToken;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [-71.0589, 42.3601],
    zoom: 12,
});

let restaurants = [
    {
        name: "Neptune Oyster",
        description: "Lines form for the raw bar & warm, buttered lobster rolls at this tiny, high-end oyster bar",
        location: {
            coordinates: [-71.0560, 42.3632],
        }

    },
    {
        name: "Yvonne's",
        description: "Refined supper club in a handsome hideaway accented with marble & mahogany wood",
        location: {
            coordinates: [-71.06141, 42.35549],
        }
    },
    {
        name: "Fox and The Knife",
        description: "Rustic Italian fare & modern cocktails in a lively setting with bar seating",
        location: {
            coordinates: [-71.05648, 42.34272],
        },
    }
]

restaurants.forEach(function (marker) {
    let popup = new mapboxgl.Popup()
        .setHTML('<div style="text-align:center;">'
            + '<h3 style="font-size:18px;color: darkturquoise;">' + marker.name + '</h3>'
            + '<p style="font-size:14px;font-style:italic;"> ' + marker.description + '</p></div>');

    new mapboxgl.Marker()
        .setLngLat(marker.location.coordinates)
        .setPopup(popup)
        .addTo(map);
})

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
map.addControl(new mapboxgl.NavigationControl());

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

map.on('click', function (e) {
    let hideMarker = document.createElement('button');
    hideMarker.addEventListener('click', function (){

    })
});


// function getReverseGeocode(point, marker) {
//
//     $.ajax({
//             url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${point}.json?access_token=${mapboxgl.accessToken}`,
//             success: function (data) {
//                 marker.setPopup(marker.getPopup()
//                     .setHTML(data.features[0].place_name))
//                     .togglePopup();
//             }
//         }
//     );
// }

// let marker = new mapboxgl.Marker({
//
// });
//
// // Define the animation.
// function animateMarker(timestamp) {
//     let radius = 20;
//
//     /*
//     Update the data to a new position
//     based on the animation timestamp.
//     The divisor in the expression `timestamp / 1000`
//     controls the animation speed.
//     */
//     marker.setLngLat([
//         Math.cos(timestamp / 2000) * radius,
//         Math.sin(timestamp / 2000) * radius
//     ]);
//
//     /*
//     Ensure the marker is added to the map.
//     This is safe to call if it's already added.
//     */
//     marker.addTo(map);
//
// // Request the next frame of the animation.
//     requestAnimationFrame(animateMarker);
// }
//
// // Start the animation.
// requestAnimationFrame(animateMarker)

