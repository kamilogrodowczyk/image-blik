import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import FileSaver from "file-saver";
const imageContainer = document.querySelector(".image-leftbar");
const anchors = document.querySelectorAll("a");
const images = document.querySelectorAll("img");
const link = document.querySelector(".btn.download");
const urlArray = [];

const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "/login";
} else {
  document.body.style.display = 'block';
}

const urlToPromise = (url) => {
  return new Promise(function (resolve, reject) {
    JSZipUtils.getBinaryContent(url, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const saveAsZip = () => {
  images.forEach((image) => urlArray.push(image.src));
  const zip = new JSZip();
  urlArray.forEach((url) => {
    const img = zip.folder("images");
    const filename = url.replace(/.*\//g, "");
    img.file(filename, urlToPromise(url), { base64: false });
  });
  zip.generateAsync({ type: "blob" }).then(function (content) {
    // see FileSaver.js
    saveAs(content, "image-blik.zip");
  });
  localStorage.removeItem("token");
};

link.addEventListener("click", saveAsZip);

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
