// $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/weather",
//     type: "GET",
//     data: {
//         APPID: OPEN_WEATHERMAP_TOKEN,
//         lat: 42.3601,
//         long: -71.0598,
//         units: "imperial"
//     },
//     success:function(data){
//         console.log(data);
//     }
// });

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast",
    type: "GET",
    data: {
        APPID: OPEN_WEATHERMAP_TOKEN,
        lat: 42.3601,
        lon: -71.0598,
        units: "imperial"
    },
    success:function(data){
        console.log(data);
    }

})