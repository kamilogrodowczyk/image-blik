import { createImages, appendChildren } from "./addElements";

export const selectImages = (files, imageContainer) => {
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = () => {
      const ele = createImages(reader.result);
      const items = Array(i + 1).fill(ele);
      appendChildren(imageContainer, items);
    };
    reader.readAsDataURL(files[i]);
  }
};
