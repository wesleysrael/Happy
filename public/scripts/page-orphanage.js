const options = {
  dragging: false,
  toucheZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomcontrol: false,
};

const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

//create map
const map = L.map("mapid", options).setView([lat, lng], 15);

// create and add tilelayer
L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
  }
).addTo(map);

// create icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker
L.marker([lat, lng], { icon }).addTo(map);

// image gallery

function selectImage() {
  const button = event.currentTarget;

  // remover todas as classe .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container de image
  imageContainer.src = image.src;

  // Adicionar classe .active
  button.classList.add("active");
}
