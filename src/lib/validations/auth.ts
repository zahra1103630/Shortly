// src/lib/validations/auth.ts
import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .min(1, "Email is required")
  .pipe(z.email("Please enter a valid email address"));

const passwordLoginSchema = z.string().min(1, "Password is required");

const passwordSignupSchema = z
  .string()
  .min(8, "Password must be at least 8 characters");

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordLoginSchema,
});

export const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name is too long"),
  email: emailSchema,
  password: passwordSignupSchema,
});

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
