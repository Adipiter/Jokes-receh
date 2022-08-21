// jokes receh
const tombolJokes = document.querySelector("#jokes-receh");
const modalBody = document.querySelector(".modal-body");

tombolJokes.addEventListener("click", function () {
  fetch("https://candaan-api.vercel.app/api/text/random")
    .then((response) => response.json())
    .then((data) => {
      modalBody.innerHTML = data.data;
    });
});
