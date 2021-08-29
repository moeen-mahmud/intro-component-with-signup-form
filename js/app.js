const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userMail = document.getElementById("user-mail");
const userPass = document.getElementById("user-pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (form.checkValidity() === true) {
    clearFields();
  }
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
  if (lastNameValue === "") {
    setErrorFor(lastName, "Last name cannot be empty");
  } else {
    setSuccessFor(lastName);
  }
  if (!isMail(userMailValue)) {
    setErrorFor(userMail, "Looks like this is not an email");
  } else {
    setSuccessFor(userMail);
  }
  if (userPassValue === "") {
    setErrorFor(userPass, "Password cannot be empty");
  } else {
    setSuccessFor(userPass);
  }
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  input.style.color = "hsl(0, 100%, 74%)";
  const small = formControl.querySelector("small");
  small.classList.add("error-msg");
  small.innerText = message;
  input.classList.add("error");
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = "";
  small.classList.remove("error-msg");
  input.classList.remove("error");
};

const isMail = (userMail) => {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    userMail
  );
};

const clearFields = () => {
  firstName.value = "";
  lastName.value = "";
  userMail.value = "";
  userPass.value = "";
};
