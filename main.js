document.getElementById("checkButton").addEventListener("click", function () {
  var password = document.getElementById("password").value;
  var reliability = checkPasswordReliability(password);
  var inputField = document.getElementById("password");

  if (reliability === "murakkab") {
    inputField.style.border = "1px solid red";
  } else if (reliability === "ishonchsiz") {
    inputField.style.border = "1px solid yellow";
  } else if (reliability === "ishochli") {
    inputField.style.border = "1px solid green";
  }
});

function checkPasswordReliability(password) {
  if (password.length >= 4 && password.length < 8) {
    return "ishonchsiz";
  } else if (password.length >= 8) {
    return "ishochli";
  } else {
    return "murakkab";
  }
}
