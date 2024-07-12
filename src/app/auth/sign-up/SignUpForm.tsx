"use client";

import { SubmitButton, TextInput } from "@/components";
import { useFormState } from "react-dom";
import { handleSignUpForm, SignUpState } from "./actions";

const initialState: SignUpState = {
  isValid: null,
  errors: {
    name: null,
    email: null,
    password: null,
    passwordConfirmation: null,
  },
};

export const SignUpForm = () => {
  const [formState, formAction] = useFormState(handleSignUpForm, initialState);

  return (
    <form action={formAction}>
      <TextInput name="name" label="Name" error={formState.errors.name} />
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
      <TextInput
        name="passwordConfirmation"
        label="Confirm Password"
        type="password"
        error={formState.errors.passwordConfirmation}
      />
      <SubmitButton label="Create Account" />
    </form>
  );
};
