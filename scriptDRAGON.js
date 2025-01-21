const titleDRAGON = "Bubby the angry Dragon";
const imgDRAGONUrl = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8yNF9kaWdpdGFsX3BhaW50X2lsbHVzdHJhdGlvbl9vZl9kcmFnb25faXNvbGF0ZV9kNTMzN2FlMy1jY2YwLTQ4NmItYmIzZC1jYjFlZjJiNTYzNjBfMS5wbmc.png";
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
