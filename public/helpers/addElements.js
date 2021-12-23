export const createImages = (base64Url, imageUrl) => {
  const image = document.createElement("img");
  image.src = base64Url;
  image.alt = imageUrl.replace(/\.[^.]*$/, '');
  image.className = "box";
  return image;
};

export const appendChildren = (children) => {
  const df = document.createDocumentFragment();
  children.forEach((child) => {
    df.appendChild(child);
  });
  return df;
};
