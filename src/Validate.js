let errors = {};

const emailValidate = (value) => {
  let checkemail = /^[aA-zZ0-9]{4,20}@[aA-zZ]{2,20}.{2,10}$/;
  if (value === "") {
    errors.emailError = " * Required Field";
  } else {
    if (!checkemail.test(value)) {
      errors.emailError = " * Enter Valid Email Address";
    }
  }
};

const passwordValidate = (value) => {
  let checkpassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}/;
  if (value === "") {
    errors.passwordError = " * Required Field";
  } else {
    if (!checkpassword.test(value)) {
      errors.passwordError =
        " * Minimum 8 digit and must be uppercase lowercase number and special charactor";
    }
  }
};

const numberValidate = (value) => {
  let numbercheck = /^[6789][0-9]{9}$/;
  if (value === "") {
    errors.numberError = " * Required Field";
  } else {
    if (!numbercheck.test(value)) {
      errors.numberError = " * Must be 10 digit and Start with 6,7,8,9";
    }
  }
};

const nameValidate = (value) => {
  let namecheck = /[a-zA-Z]{3,20}$/;
  if (value === "") {
    errors.nameError = " * Required Field";
  } else {
    if (!namecheck.test(value)) {
      errors.nameError =
        " * Minimum 3 charactor and Maximum 20 charactor allowed no space allowed";
    }
  }
};

export const LoginValidate = (value) => {
  errors = {};
  emailValidate(value.email);
  passwordValidate(value.password);
  return errors;
};

export const SignUpValidate = (value) => {
  errors = {};
  nameValidate(value.name);
  emailValidate(value.email);
  numberValidate(value.number);
  passwordValidate(value.password);
  if (value.confirm_password === "") {
    errors.confirm_passwordError = "Required Field";
  } else {
    if (value.password !== value.confirm_password) {
      errors.confirm_passwordError = "Password not Match";
    }
  }
  return errors;
};
