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

  window.viewMarks = function () {
    const marks = getFromLocalStorage("marks") || [];
    marksContainer.innerHTML = "";
    marks.forEach((mark) => {
      const markElement = document.createElement("div");
      markElement.textContent = `Unit: ${mark.unitName}, Marks: ${mark.marks}`;
      marksContainer.appendChild(markElement);
    });
  };

  window.overseeRecords = function () {
    const records = getFromLocalStorage("marks") || [];
    console.log("Overseeing Records:", records);
    alert("Check console for records.");
  };

  window.manageUserAccounts = function () {
    const studentData = getFromLocalStorage("studentData");
    console.log("Managing User Accounts:", studentData);
    alert("Check console for user accounts.");
  };

  window.sendNotifications = function () {
    alert("Notifications sent!");
  };
});
