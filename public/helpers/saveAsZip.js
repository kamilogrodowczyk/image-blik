import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import FileSaver from "file-saver";

const urlArray = [];

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

export const saveAsZip = (images) => {
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
