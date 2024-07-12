"use server";

import UserService from "@/services/Users";

export type SignUpError = {
  name: null | string;
  email: null | string;
  password: null | string;
  passwordConfirmation: null | string;
};

export type SignUpState = {
  isValid: null | boolean;
  errors: SignUpError;
};

const validateSignUpForm = (formData: FormData) => {
  const errors: SignUpError = {
    name: null,
    email: null,
    password: null,
    passwordConfirmation: null,
  };

  const name = String(formData.get("name"));
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const passwordConfirmation = String(formData.get("confirm-password"));

  try {
    if (name === "" || !name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!email.includes("@")) {
      errors.email = "Email is not valid";
    }
    if (password.length < 10) {
      errors.password = "Password must have at least 10 characters";
    }
    if (!password || password !== passwordConfirmation) {
      errors.passwordConfirmation = "Both passwords must be equal";
    }
    const isValid = Object.values(errors).every((value) => value === null);

    if (Object.values(errors)) {
      throw new Error("Error creating account");
    }

    return { isValid, errors };
  } catch (error) {
    return { isValid: false, errors };
  }
};

export const handleSignUpForm = async (prevState: any, formData: FormData) => {
  const validation = validateSignUpForm(formData);

  if (!validation.isValid) {
    return { ...prevState, ...validation };
  }
  console.log(validation);

  const data = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };
  const record = await UserService.signUp(data);

  return { ...prevState, isValid: true };
};
