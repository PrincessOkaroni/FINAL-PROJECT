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
