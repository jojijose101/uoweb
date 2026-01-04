const purpose = document.getElementById("purpose");
const conditionalFields = document.querySelectorAll(".conditional");

// Show / Hide fields
purpose.addEventListener("change", () => {
  conditionalFields.forEach(el => el.style.display = "none");

  if (purpose.value) {
    document.querySelectorAll("." + purpose.value).forEach(el => {
      el.style.display = "block";
    });
  }
});

// Faculty autocomplete
const faculties = [
  "Arun Kumar",
  "Sreelatha",
  "Ramesh Nair",
  "Anitha Joseph",
  "Vishnu Prasad",
  "Deepa Mohan"
];

const facultyInput = document.getElementById("faculty");
const facultyList = document.getElementById("facultyList");

facultyInput.addEventListener("input", () => {
  facultyList.innerHTML = "";
  const value = facultyInput.value.toLowerCase();

  if (!value) return;

  faculties
    .filter(name => name.toLowerCase().includes(value))
    .forEach(name => {
      const li = document.createElement("li");
      li.textContent = name;
      li.onclick = () => {
        facultyInput.value = name;
        facultyList.innerHTML = "";
      };
      facultyList.appendChild(li);
    });
});


