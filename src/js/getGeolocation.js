navigator.geolocation.getCurrentPosition(function(position) {
    
    if (navigator.geolocation) {
        const long = position.coords.longitude;
        console.log(long);
        const lat = position.coords.latitude;
        console.log(lat)
    }
});