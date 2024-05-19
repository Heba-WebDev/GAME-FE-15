'use client'

import { CardWrapper } from "@/components/auth/CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/schemas/index";
import { LoginForm } from "@/components/auth/LoginForm";
import { signIn } from "next-auth/react";

export default function login() {


  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  function onSubmit(data){
    console.log(data);
    const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success){
          const {email, password} = validatedFields.data;
          signIn("credentials",{
            email: email,
            password: password,
          })
        }
  }
  return (
    <CardWrapper
      headerlabel="Welcome Back"
      backButtonLabel="Don't have an account? Sign up"
      backButtonHref="/auth/register"
      showSocial
      socialText="Login with Google"
    >
      <LoginForm />
    </CardWrapper>
  );
}
