import { CardWrapper } from "@/components/auth/CardWrapper";
import { LoginForm } from "@/components/auth/LoginForm";
import React from "react";

export default function login() {
  return (
    <CardWrapper
      headerlabel="Welcome Back"
      backButtonLabel="Don't have an account? Sign up"
      backButtonHref="/auth/register"
      showSocial
    >
      <LoginForm />
    </CardWrapper>
  );
}
