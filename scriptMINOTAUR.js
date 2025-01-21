const titleMINOTAUR = "Bubby the angry Minotaur";
const imgMINOTAURUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tondo_Minotaur_London_E4_MAN.jpg/220px-Tondo_Minotaur_London_E4_MAN.jpg";
const textMINOTAUR = "Angry angry cow";
const cardColorMINOTAUR = "coral";

if (titleMINOTAUR && imgMINOTAURUrl && textMINOTAUR && cardColorMINOTAUR) {
  document.getElementById("titleMINOTAUR").textContent = titleMINOTAUR;
  document.getElementById("imgMINOTAUR").src = imgMINOTAURUrl;
  document.getElementById("textMINOTAUR").textContent = `"${textMINOTAUR}!"`;
  document.getElementById("cardMINOTAUR").style.backgroundColor =
    cardColorMINOTAUR;
} else {
  document.getElementById("imgMINOTAUR").src = "./images/archangel.png";
}
