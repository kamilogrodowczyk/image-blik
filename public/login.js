const form = document.querySelector("form");
const input = document.querySelector(".text-input");

form.addEventListener("submit", async (e) => {
  await fetch("http://localhost:5000/image-json")
    .then((res) => res.json())
    .then((data) =>
      input.value === data[0].randomPassword
        ? localStorage.setItem("token", `${data[0].randomPassword}`)
        : null,
    )
    .catch((err) => console.log(err));
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "/image";
  }
});
