const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  await fetch("http://localhost:5000/image-json")
    .then((res) => res.json())
    .then((data) =>
      data ? localStorage.setItem("token", `${data[0].randomPassword}`) : null,
    )
    .catch((err) => console.log(err));
  console.log(response);
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "/image";
  }
});
