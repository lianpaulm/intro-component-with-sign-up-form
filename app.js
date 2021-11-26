const form = document.querySelector('form');
const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('email');
const password = document.getElementById('pwd');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

// validate inputs
function checkInputs() {
  // get values from the inputs
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // first name validation
  if (firstNameValue === '') {
    setErrorFor(firstName, 'First Name cannot be empty');
  } else {
    removeErrorFor(firstName);
  }

  // last name validation
  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last Name cannot be empty');
  } else {
    removeErrorFor(lastName);
  }

  // email validation
  if (emailValue === '') {
    setErrorFor(email, 'E-mail cannot be empty');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Looks like this is not an email');
  } else {
    removeErrorFor(email);
  }

  // password validation
  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  } else {
    removeErrorFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('.error-text');

  // add error class
  formControl.classList.add('error');

  // add error message
  errorMessage.textContent = message;
}

function removeErrorFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
}

function isEmail(email) {
  // return a (true or false) from a regex validation
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
