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
  iconUrl: "/images/map-marker.svg",
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
  'Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg" </a>'
);

let marker;

//create and add markers
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  // remover icon
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  marker && map.removeLayer(marker);

  // add icon tileLayer

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add campos de fotos

function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-images
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // relizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se o campo está vazio, se sim,não adicionar ao container de images
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  // limpar o campo antes de adicionar ao container de images
  input.value = "";

  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deleter o campo
  span.parentNode.remove();
}

// seleciona o input
function toggleSelect(event) {
  //retirar a classe .active (dos botões)
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });
  // colocar a classe .active

  const button = event.currentTarget;
  button.classList.add("active");

  // atualizar o meu input hidder
  const input = document.querySelector('[name="open_on_weekends"]');
  console.log(input);

  //verificar se sim ou não
  input.value = button.dataset.value;
}

// function validate(event) {
//   // validar se lat e lng estão preenchidos

//   const needLatAndLng = true;
//   if (needLatAndLng) {
//     event.preventDefault();
//     alert("Seleciona um ponto no mapa");
//   }
// }
