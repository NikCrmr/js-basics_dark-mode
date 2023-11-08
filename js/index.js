console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const buttonDark = document.querySelector('[data-js="dark-mode-button"]');
const buttonWhite = document.querySelector('[data-js="light-mode-button"]');
const buttonToggle = document.querySelector('[data-js="toggle-button"]');

buttonDark.addEventListener("click", () => {
  console.log("Click!");
  bodyElement.classList.add("dark");
});

buttonWhite.addEventListener("click", () => {
  console.log("Click!");
  bodyElement.classList.remove("dark");
});

buttonToggle.addEventListener("click", () => {
  console.log("Click!");
  bodyElement.classList.toggle("dark");
});
