import "./styles.css";
import "intl-tel-input/build/css/intlTelInput.css";
import { selectImages } from "../public/helpers/selectImages";
import { createPassword } from "../public/helpers/createPassword";
import { copyValue } from "../public/helpers/copyValue";
import {
  addIntlTelInputToArray,
  addCountryCode,
} from "../public/helpers/addCountryCode";

const inputImage = document.querySelector('input[type="file"]');
const inputPassword = document.querySelector('input[name="random_password"]');
const formButton = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");
const copyButton = document.querySelector(".copy-btn");
const copyAlert = document.querySelector(".copy-alert");
const imageContainer = document.querySelector(".image-leftbar");

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
  addCountryCode();
});

inputImage.addEventListener("click", (e) => {
  while (imageContainer.lastChild) {
    imageContainer.removeChild(imageContainer.lastChild);
  }
});

imageContainer.addEventListener("click", (e) => {
  imageContainer.classList.toggle("visible");
  const flag = imageContainer.classList.contains('visible');
  imageContainer.setAttribute('aria-expanded', flag);
});

copyButton.addEventListener("click", () => {
  copyValue(copyAlert, inputPassword);
});

window.addEventListener("DOMContentLoaded", (event) => {
  localStorage.removeItem("token");
  addIntlTelInputToArray();
});
