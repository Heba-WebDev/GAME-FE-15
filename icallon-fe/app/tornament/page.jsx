"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Tornament() {
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      console.log("not loggedin");
      redirect("/");
    },
  });
  if (status === "loading") {
    return <div>Loading....</div>;
  }
  return (
    <div>
      loggedin {JSON.stringify(data)}
      <Button onClick={() => signOut()}> signout</Button>
    </div>
  );
}
