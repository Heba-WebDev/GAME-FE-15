"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

export function Social() {
  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <div className="relative flex justify-center text-xs uppercase">
        <span className="px-2 text-muted-foreground">OR</span>
      </div>
      <Button size="lg" className="w-full bg-white" onClick={() => {}}>
        <FcGoogle className="w-10 h-10 p-2" />
        Login with Google
      </Button>
    </div>
  );
}
