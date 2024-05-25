'use client'

import { CardWrapper } from "@/components/auth/CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/schemas/index";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function register() {


  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  function onSubmit(data){
    //console.log(data);
  }
  return (
    <CardWrapper
      headerlabel="Create an Account"
      backButtonLabel="Already have an account? Login"
      backButtonHref="/auth/login"
      showSocial
      socialText="Sign up with google"
    >
      <RegisterForm/>
    </CardWrapper>
  );
}

