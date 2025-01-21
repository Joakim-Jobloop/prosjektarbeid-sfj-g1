const titlePHOENIX = "Ares the burner";
const imgPHOENIXUrl =
  "https://cdn.pixabay.com/photo/2024/02/23/17/31/ai-generated-8592509_1280.jpg";
const textPHOENIX = "Im on FIRE!";
const cardColorPHOENIX = "rgb(43, 38, 38)";

if (titlePHOENIX && imgPHOENIXUrl && textPHOENIX && cardColorPHOENIX) {
  document.getElementById("titlePHOENIX").textContent = titlePHOENIX;
  document.getElementById("imgPHOENIX").src = imgPHOENIXUrl;
  document.getElementById("textPHOENIX").textContent = `"${textPHOENIX}!"`;
  document.getElementById("cardPHOENIX").style.backgroundColor =
    cardColorPHOENIX;
} else {
  document.getElementById("imgPHOENIX").src = "./images/archangel.png";
}
