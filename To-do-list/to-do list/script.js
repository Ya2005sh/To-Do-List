function addStudent() {
  const nameInput = document.getElementById('studentName');
  const status = document.getElementById('status').value;
  const name = nameInput.value.trim();

  if (!name) return alert("Please enter a name.");

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.textContent = name;
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => li.remove();

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  if (status === "present") {
    document.getElementById("presentList").appendChild(li);
  } else {
    document.getElementById("tardyList").appendChild(li);
  }

  nameInput.value = "";
}

function clearAll() {
  document.getElementById("presentList").innerHTML = "";
  document.getElementById("tardyList").innerHTML = "";
}
