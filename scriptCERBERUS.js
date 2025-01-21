const titleCERBERUS = "Brain Trio Cerberus";
const imgCERBERUSUrl = "./images/CERBERUS/CERBERUS.jpg";
const textCERBERUS = "RAAF WOOF! (I'm hungry)";
const cardColorCERBERUS = "#d01c1f";

if (titleCERBERUS && imgCERBERUSUrl && textCERBERUS && cardColorCERBERUS) {
  document.getElementById("titleCERBERUS").textContent = titleCERBERUS;
  document.getElementById("imgCERBERUS").src = imgCERBERUSUrl;
  document.getElementById("textCERBERUS").textContent = `"${textCERBERUS}!"`;
  document.getElementById("cardCERBERUS").style.backgroundColor =
    cardColorCERBERUS;
} else {
  document.getElementById("imgCERBERUS").src = "./images/archangel.png";
}
