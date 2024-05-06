// 1-Task uchun-js
// document.getElementById("checkButton").addEventListener("click", function () {
//   var password = document.getElementById("password").value;
//   var reliability = checkPasswordReliability(password);
//   var inputField = document.getElementById("password");

//   if (reliability === "murakkab") {
//     inputField.style.border = "1px solid red";
//   } else if (reliability === "ishonchsiz") {
//     inputField.style.border = "1px solid yellow";
//   } else if (reliability === "ishochli") {
//     inputField.style.border = "1px solid green";
//   }
// });

// function checkPasswordReliability(password) {
//   if (password.length >= 4 && password.length < 8) {
//     return "ishonchsiz";
//   } else if (password.length >= 8) {
//     return "ishochli";
//   } else {
//     return "murakkab";
//   }
// }

// 2-Task uchun-js
document.addEventListener("DOMContentLoaded", function () {
  const userForm = document.getElementById("userForm");
  const userTable = document
    .getElementById("userTable")
    .getElementsByTagName("tbody")[0];

  userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
      addUser(name, email);
      userForm.reset();
    } else {
      alert("Iltimos, barcha maydonlarni toʻldiring.");
    }
  });

  function addUser(name, email) {
    const newRow = userTable.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = name;
    cell2.textContent = email;
    cell3.innerHTML = '<button onclick="deleteUser(this)">O‘chirish</button>';
  }

  window.deleteUser = function (row) {
    const rowIndex = row.closest("tr").rowIndex - 1;
    userTable.deleteRow(rowIndex);
  };
});
