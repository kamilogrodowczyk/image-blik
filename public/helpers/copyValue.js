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
