const btn: any = document.getElementById("toggle-skills");
const skills: any = document.getElementById("skills");

btn.addEventListener("click", () => {
  if (skills.style.display != "none") {
    skills.style.display = "none";
  } else {
    skills.style.display = "block";
  }
});