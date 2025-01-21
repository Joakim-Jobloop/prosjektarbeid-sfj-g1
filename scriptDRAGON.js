const titleDRAGON = "Bubby the angry Dragon";
const imgDRAGONUrl = "https://static.wikia.nocookie.net/monster/images/3/3c/68185247-BAAD-4E7C-BA78-C2C72761CBDA.jpeg/revision/latest?cb=20190406202034";
const textDRAGON = "Angry Dragon";
const cardColorDRAGON = "coral";

if (titleDRAGON && imgDRAGONUrl && textDRAGON && cardColorDRAGON) {
  document.getElementById("titleDRAGON").textContent = titleDRAGON;
  document.getElementById("imgDRAGON").src = imgDRAGONUrl;
  document.getElementById("textDRAGON").textContent = `"${textDRAGON}!"`;
  document.getElementById("cardDRAGON").style.backgroundColor = cardColorDRAGON;
} else {
  document.getElementById("imgDRAGON").src = "/images/archangel.png";
}
