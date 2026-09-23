"use strict";
const controls = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".project");
const count = document.getElementById("result-count");
controls.forEach(button => button.addEventListener("click", () => {
  const selected = button.dataset.filter;
  controls.forEach(control => control.setAttribute("aria-pressed", String(control === button)));
  let visible = 0;
  projects.forEach(project => {
    project.hidden = selected !== "all" && project.dataset.category !== selected;
    if (!project.hidden) visible += 1;
  });
  count.textContent = visible + (visible === 1 ? " project" : " projects");
}));
