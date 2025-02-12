mapboxgl.accessToken = Map_Token;

const map = new mapboxgl.Map({
container: 'map', // container ID
center: listing.geometry.coordinates,
zoom: 8 // starting zoom
        });

const marker = new mapboxgl.Marker({color:"red"})
.setLngLat( listing.geometry.coordinates)
.setPopup(new mapboxgl.Popup({offset: 25}).setHTML(`<p>exact location provided<h4>${listing.location}</h4></p>`))
.addTo(map);