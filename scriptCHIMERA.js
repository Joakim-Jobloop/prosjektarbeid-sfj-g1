const titleCHIMERA = "Family dog from hell";
const imgCHIMERAUrl = "./images/CHIMERA/Chimera.jpeg";
const textCHIMERA = "Postman's worst nightmare";
const cardColorCHIMERA = "blue";

if (titleCHIMERA && imgCHIMERAUrl && textCHIMERA && cardColorCHIMERA) {
  document.getElementById("titleCHIMERA").textContent = titleCHIMERA;
  document.getElementById("imgCHIMERA").src = imgCHIMERAUrl;
  document.getElementById("textCHIMERA").textContent = `"${textCHIMERA}!"`;
  document.getElementById("cardCHIMERA").style.backgroundColor =
    cardColorCHIMERA;
} else {
  document.getElementById("imgCHIMERA").src = "./images/archangel.png";
}
