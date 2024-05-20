"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { BackButton } from "./BackButton";
import { Header } from "./Header";
import { Social } from "./Social";

export function CardWrapper({
  children,
  headerlabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  socialText,
}) {
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <Header label={headerlabel} />
      </CardHeader>
      <CardContent className="pb-0">{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social text={socialText} />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
