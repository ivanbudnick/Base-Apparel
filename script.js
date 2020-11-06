
var button = document.getElementById("button");

button.addEventListener("click", otherFunction);

function otherFunction(e) {
  e.preventDefault();
  var input = document.getElementById("input");
  var value = input.value;
  var errorText = document.getElementById("error-text");
  var error = document.getElementById("error");
  var input = document.getElementById("input");
  if (value.includes("@"&&".com")) {
  errorText.style.display = "none";
    error.style.display = "none";
      input.style.border = "1px solid hsl(0, 36%, 70%)";
  } else {
  errorText.style.display = "block";
  error.style.display = "inline";
  input.style.border = "1px solid red";
  }
};
