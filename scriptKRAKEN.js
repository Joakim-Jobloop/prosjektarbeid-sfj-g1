const titleKRAKEN = "Mio the seamonster of all";
const imgKRAKENUrl =
  "./images/KRAKEN/kraken_the_sea_monster_by_artsfuture_dge86gu-pre.jpg";
const textKRAKEN = "I am the scariest monster of all time";
const cardColorKRAKEN = "blueviolet";

if (titleKRAKEN && imgKRAKENUrl && textKRAKEN && cardColorKRAKEN) {
  document.getElementById("titleKRAKEN").textContent = titleKRAKEN;
  document.getElementById("imgKRAKEN").src = imgKRAKENUrl;
  document.getElementById("textKRAKEN").textContent = `"${textKRAKEN}!"`;
  document.getElementById("cardKRAKEN").style.backgroundColor = cardColorKRAKEN;
} else {
  document.getElementById("imgKRAKEN").src = "/images/archangel.png";
}
