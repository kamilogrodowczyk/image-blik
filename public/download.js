import { saveAsZip } from "./helpers/saveAsZip";
const imageContainer = document.querySelector(".image-leftbar");
const anchors = document.querySelectorAll("a");
const images = document.querySelectorAll("img");
const link = document.querySelector(".btn.download");

const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "/login";
} else {
  document.body.style.display = "block";
}

link.addEventListener("click", () => {
  saveAsZip(images);
});

imageContainer.addEventListener("click", (e) => {
  imageContainer.classList.toggle("visible");
});
if (anchors) {
  anchors.forEach((a) => {
    a.addEventListener("click", (e) => {
      localStorage.removeItem("token");
      e.stopPropagation();
    });
  });
}
