const chk = document.getElementById("chk");
const title = document.querySelector(".title");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  title.classList.toggle("jumdark");
});

const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});

const abt = document.querySelector(".abt");

abt.addEventListener("mouseenter", () => {
  abt.style.backgroundColor = "rgb(100, 50, 120)";
});

abt.addEventListener("mouseleave", () => {
  abt.style.backgroundColor = "red";
});
