const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  const containerWidth = imgs.offsetWidth;
  const imageWidth = img[idx].offsetWidth;
  const translateXValue = -idx * imageWidth;

  imgs.style.transform = `translateX(${translateXValue}px)`;
}

setInterval(carrossel, 1500);
