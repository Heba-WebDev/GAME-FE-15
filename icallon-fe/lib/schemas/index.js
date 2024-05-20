import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Valid email required" }),
  password: z.string().min(1, {
    message: "password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Valid email required" }),
  password: z.string().min(6, {
    message: "minimum 6 characters password is required",
  }),
  display_name: z.string().min(1, {
    message: "Display name is required",
  }),
  country: z
    .string({
      required_error: "Please select your country",
    })
    .min(1, {
      message: "Country is required",
    }),
});
