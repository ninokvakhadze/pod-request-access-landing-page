const mail_input = document.getElementById("input");
const button = document.getElementById("button");
const text = document.querySelector(".warning");

button.addEventListener("click", function () {
  const input = mail_input.value;
  const regex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const valid = regex.test(input);

  if (valid) {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
});