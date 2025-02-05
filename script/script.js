function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function validateForm(inputs) {
  for (let input of inputs) {
    if (input.value.trim() === "") {
      alert(`${input.name} is required`);
      return false;
    }
  }
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  const marksContainer = document.querySelector(".marks-container");
  const marksForm = document.getElementById("marks-form");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const inputs = signupForm.querySelectorAll("input, select");
      if (validateForm(inputs)) {
        const studentData = {
          admissionNumber: inputs[0].textContent,
          number,
          password: inputs[1].textContent,
          number,
          academicYear: inputs[2].value,
          semester: inputs[3].value,
        };
        saveToLocalStorage("studentData", studentData);
        alert("Sign up successful!");
        signupForm.reset();
      }
    });
  }

    if (marksForm) {
    marksForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const inputs = marksForm.querySelectorAll("input");
      if (validateForm(inputs)) {
        const marksData = getFromLocalStorage("marks") || [];
        const newMark = {
          studentId: inputs[0].value,
          courseCode: inputs[1].value,
          marks: inputs[2].value,
        };
        marksData.push(newMark);
        saveToLocalStorage("marks", marksData);
        alert("Marks uploaded successfully!");
        marksForm.reset();
      }
    });
  }