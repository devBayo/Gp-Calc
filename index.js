const addBtn = document.querySelector(".add-course");

const input = document.querySelector(".inp-group");

function removeInput() {
  this.parentElement.remove();
}

function addInput() {
  const name = document.createElement("input");
  name.type = "text";
  name.placeholder = "Eg. Advanced Calculus";

  const values = ["Select", "A", "B", "C", "D", "E", "F"];

  const select = document.createElement("select");
  select.type = "select";
  select.placeholder = "select";

  for (let i = 0; i < values.length; i++) {
    let option = document.createElement("option");
    option.value = values[i];
    option.innerHTML = values[i];
    select.appendChild(option);
  }
  const credit = document.createElement("input");
  credit.type = "text";
  credit.placeholder = "Eg. 20";

  const btn = document.createElement("a");
  btn.className = "delete";
  btn.innerHTML = "&times";

  btn.addEventListener("click", removeInput);

  const flex = document.createElement("div");
  flex.className = "flex";

  input.appendChild(flex);
  flex.appendChild(name);
  flex.appendChild(select);
  flex.appendChild(credit);
  flex.appendChild(btn);
}

addBtn.addEventListener("click", addInput);
