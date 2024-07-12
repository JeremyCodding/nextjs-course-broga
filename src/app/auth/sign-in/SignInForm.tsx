"use client";

import { SubmitButton, TextInput } from "@/components";
import { useFormState } from "react-dom";
import { handleSignInForm, SignInState } from "./actions";

const initialState: SignInState = {
  isValid: null,
  errors: {
    name: null,
    email: null,
    password: null,
    passwordConfirmation: null,
  },
};

export const SignInForm = () => {
  const [formState, formAction] = useFormState(handleSignInForm, initialState);

  return (
    <form action={formAction}>
      <TextInput
        name="email"
        label="Email"
        inputMode="email"
        error={formState.errors.email}
      />
      <TextInput
        name="password"
        label="Password"
        type="password"
        error={formState.errors.password}
      />

      <SubmitButton label="Login" />
    </form>
  );
};
