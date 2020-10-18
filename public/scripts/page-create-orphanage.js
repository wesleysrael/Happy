//create map
const map = L.map("mapid").setView([-5.21387, -37.3244038], 15);

// create and add tilelayer
L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
  }
).addTo(map);

// create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
  Href: "orphanage.html",
});

// create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" </a>'
);

let marker;

//create and add markers
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  // remover icon
  document.querySelector("[name=lat]").value(lat);
  document.querySelector("[name=lng]").value(lng);

  marker && map.removeLayer(marker);

  // add icon tileLayer

  marker = L.marker([lat, lng], { icon }).addTo(map);
});
