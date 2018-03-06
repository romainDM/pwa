// on vérifie que notre navigateur supporte les service workers
if('serviceWorker' in navigator) {
  // si oui, on essaie d'enregistrer notre service worker
  try {
    navigator.serviceWorker.register('service-worker.js');
  }
  catch (error) {
    // si ça échoue, on écrit un message d'erreur
    console.log('Error while registering the service worker.');
    console.log(error);
  }
}


$("#menu").click(function(){
  $(".menuderoulant").fadeIn("slow");
  $(".fadeout").fadeIn("slow");
});

$(".fadeout").click(function(){
  $(".menuderoulant").fadeOut("slow");
  $(".fadeout").fadeOut("slow");

});


var map = L.map('mapid').setView([48.8577,2.3515], 13);
map.locate({setView: true, maxZoom: 16});


L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([48.8577,2.3515]).addTo(map)
    .bindPopup('Paris')
    .openPopup();

    function onLocationFound(e) {
        var radius = e.accuracy / 2;

        L.marker(e.latlng).addTo(map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();

        L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);
