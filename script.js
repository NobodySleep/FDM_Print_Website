const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("day-mode");

  if (body.classList.contains("day-mode")) {
    toggleBtn.textContent = "Day";
  } else {
    toggleBtn.textContent = "Night";
  }
});
