import styles from "./styles.css";
import { selectImages, createPassword, copyValue } from "./helpers.js";
const inputImage = document.querySelector('input[type="file"]');
const inputPassword = document.querySelector('input[name="random_password"]');
const formButton = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");
const copyButton = document.querySelector(".copy-btn");
const copyAlert = document.querySelector(".copy-alert");
const imageContainer = document.querySelector(".image-leftbar");

localStorage.removeItem("token");

inputImage.addEventListener("change", (e) => {
  const files = e.target.files;
  if (!files.length || files.length > 8) {
    formButton.disabled = true;
  } else {
    formButton.disabled = false;
    selectImages(files, imageContainer);
    inputPassword.value = createPassword(6);
  }
});

form.addEventListener("submit", (e) => {
  if (!inputImage.value) {
    e.preventDefault();
  }
  inputPassword.disabled = false;
});

inputImage.addEventListener("click", (e) => {
  while (imageContainer.lastChild) {
    imageContainer.removeChild(imageContainer.lastChild);
  }
});

imageContainer.addEventListener("click", (e) => {
  imageContainer.classList.toggle("visible");
  console.log(e);
});

copyButton.addEventListener("click", () => {
  copyValue(copyAlert, inputPassword);
});
