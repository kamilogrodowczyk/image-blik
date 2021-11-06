export const createPassword = (length) => {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

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
  // error.classList.remove("active");
};

export const copyValue = (copyAlert, inputPassword) => {
  if (!navigator.clipboard) {
    inputPassword.select();
    document.execCommand("copy");
  } else {
    navigator.clipboard
      .writeText(inputPassword.value)
      .then(function () {
        copyAlert.classList.add("active");
        setTimeout(() => {
          copyAlert.classList.remove("active");
        }, 3000);
      })
      .catch(function () {
        console.log("err");
      });
  }
};
