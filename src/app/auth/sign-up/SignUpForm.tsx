"use client";

import { SubmitButton, TextInput } from "@/components";
import { useFormState } from "react-dom";
import { handleSignUpForm } from "./actions";

export const SignUpForm = () => {
  const [formState, formAction] = useFormState(handleSignUpForm, {});
  return (
    <form action={formAction}>
      <TextInput name="name" label="Name" />
      <TextInput name="email" label="Email" inputMode="email" />
      <TextInput name="password" label="Password" type="password" />
      <TextInput
        name="confirm-password"
        label="Confirm Password"
        type="password"
      />
      <SubmitButton label="Create Account" />
    </form>
  );
};
