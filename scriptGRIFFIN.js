const titleGRIFFIN = "A bird in the day, but a killer in the night";
const imgGRIFFINUrl = "./images/griffin2.webp";
const textGRIFFIN = "A beautiful creature, but dont get spotted";
const cardColorGRIFFIN = "lightbrown";

if (titleGRIFFIN && imgGRIFFINUrl && textGRIFFIN && cardColorGRIFFIN) {
  document.getElementById("titleGRIFFIN").textContent = titleGRIFFIN;
  document.getElementById("imgGRIFFIN").src = imgGRIFFINUrl;
  document.getElementById("textGRIFFIN").textContent = `"${textGRIFFIN}!"`;
  document.getElementById("cardGRIFFIN").style.backgroundColor =
    cardColorGRIFFIN;
} else {
  document.getElementById("imgGRIFFIN").src = "./images/archangel.png";
}
