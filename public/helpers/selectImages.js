import { createImages, appendChildren } from "./addElements";

export const selectImages = (files, imageContainer) => {
  for (let i = 0; i < files.length; i++) {
    const imgSrc = URL.createObjectURL(files[i]);
    const ele = createImages(imgSrc, files[i].name);
    ele.onload = function () {
      URL.revokeObjectURL(ele.src);
    };
    const items = Array(i + 1).fill(ele);
    const dFragment = appendChildren(items);
    imageContainer.appendChild(dFragment);
  }
};
