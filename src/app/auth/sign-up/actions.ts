"use server";

import { z, ZodError } from "zod";

import UserService from "@/services/Users";
import { redirect } from "next/navigation";
import { getZodErrors } from "@/helpers/zod";

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
  const checkPasswords = (data: SignUpError) => {
    return data.password === data.passwordConfirmation;
  };

  const checkPasswordErrors = {
    message: "Password confirmation doesn't match",
    path: ["passwordConfirmation"],
  };

  const userSchema = z
    .object({
      name: z.string().min(3, "Name must have at least 3 characters"),
      email: z.string().email("You must put a valid email"),
      password: z.string().min(10, "Password must have at least 10 characters"),
      passwordConfirmation: z
        .string()
        .min(10, "Password must have at least 10 characters"),
    })
    .refine(checkPasswords, checkPasswordErrors);

  try {
    userSchema.parse(Object.fromEntries(formData));

    return { isValid: true, errors: {} };
  } catch (error: unknown) {
    console.log(error);
    return { isValid: false, errors: getZodErrors(error) };
  }
};

export const handleSignUpForm = async (prevState: any, formData: FormData) => {
  const validation = validateSignUpForm(formData);

  if (!validation.isValid) {
    return { ...prevState, ...validation };
  }

  const data = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  await UserService.signUp(data);

  redirect("/");
};
