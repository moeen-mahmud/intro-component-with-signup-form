const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userMail = document.getElementById("user-mail");
const userPass = document.getElementById("user-pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const userMailValue = userMail.value.trim();
  const userPassValue = userPass.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "First name cannot be empty");
  } else {
    setSuccessFor(firstName);
  }
};

const setErrorFor = (input, message) => {
  const small = document.querySelector("small");
  small.classList.add("error-msg");
  small.innerText = message;
  input.classList.add("error");
};
