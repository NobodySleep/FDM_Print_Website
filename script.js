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

const button = document.getElementById("problem_list");
const text = document.querySelector(".button_text");
  button.addEventListener("click", function() {
    text.classList.add("show");
    button.remove();
});

const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
});
