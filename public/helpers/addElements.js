export const createImages = (imageUrl) => {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.className = "box";
  return image;
};

export const appendChildren = (parent, children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};
