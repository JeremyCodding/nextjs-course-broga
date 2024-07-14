"use server";

import { z } from "zod";

import UserService from "@/services/Users";
import { redirect } from "next/navigation";
import { getZodErrors } from "@/helpers/zod";
import { encrypt } from "@/helpers/jwt";
import { cookies } from "next/headers";
import { createSession } from "@/helpers/session";
import { revalidatePath } from "next/cache";

export type SignInError = {
  name: null | string;
  email: null | string;
  password: null | string;
  passwordConfirmation: null | string;
};

export type SignInState = {
  isValid: null | boolean;
  errors: SignInError;
};

const validateSignInForm = (formData: FormData) => {
  const userSchema = z.object({
    email: z.string().email("You must put a valid email"),
    password: z.string().min(10, "Password must have at least 10 characters"),
  });

  try {
    userSchema.parse(Object.fromEntries(formData));

    return { isValid: true, errors: {} };
  } catch (error: unknown) {
    console.log(error);
    return { isValid: false, errors: getZodErrors(error) };
  }
};

export const handleSignInForm = async (prevState: any, formData: FormData) => {
  const validation = validateSignInForm(formData);

  if (!validation.isValid) {
    return { ...prevState, ...validation };
  }

  const data = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const user = await UserService.signIn(data);

  if (!user) return { isValid: false, errors: {} };

  const payload = { uuid: user.uuid, email: user.email, name: user.name };
  const jwt = await encrypt(payload);
  createSession(jwt);

  revalidatePath("/");
  return redirect("/");
};
