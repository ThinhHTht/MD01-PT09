const userList = document.querySelector(".table");

function renderUser() {
  const getList = JSON.parse(localStorage.getItem("userData")) || [];
  userList.innerHTML = "";
  for (let i = 0; i < getList.length; i++) {
    let value = getList[i];
    let newTr = document.createElement("tr");
    newTr.classList.add("user");
    newTr.innerHTML = `
        <tr>
          <td>${i + 1}</td>
          <td>${value.id}</td>
          <td>${value.username}</td>
          <td>${value.email}</td>
          <td><button onclick="deleteUser(${i})">Delete</button></td>
        </tr>
        `;
    userList.appendChild(newTr);
  }
}
renderUser();

function deleteUser(index) {
  const user = JSON.parse(localStorage.getItem("userData"));
  user.splice(index, 1);
  localStorage.setItem("userData", JSON.stringify(user));
  renderUser();
}
