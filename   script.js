document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("aboutText").textContent =
    "Nice! JavaScript is working. Next we will add sections and publish it online.";
});
