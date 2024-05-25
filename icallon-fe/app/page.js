"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showGameOption, setShowGameOption] = useState(false);
  const router = useRouter();
  const { data } = useSession();
  return (
    <div className="grid gradient w-screen h-screen place-content-center p-4 gap-16">
      <img
        className="max-w-44 md:max-w-xl mx-auto"
        src="/app_logo.png"
        alt="App Logo"
      />
      <div className="flex justify-center">
        {!showGameOption && (
          <>
            <Button
              className="bg-gradient-to-b from-accent via-white/55 to-accent px-28 py-9 text-3xl text-white"
              size="responsive"
              onClick={() => (!data ? signIn() : setShowGameOption(true))}
            >
              Start Game
            </Button>
          </>
        )}
        {showGameOption && (
          <div className="grid gap-5 pl-24 pr-24 w-full">
            <Button
              variant="default"
              size="lg"
              onClick={() => (!data ? signIn() : router.push("/solo"))}
            >
              Solo Game
            </Button>

            <Button
              variant="outlineNoShadow"
              size="lg"
              onClick={() => (!data ? signIn() : router.push("/multiplayer"))}
            >
              Create/Join a group
            </Button>

            <Button
              variant="outlineNoShadow"
              size="lg"
              onClick={() => (!data ? signIn() : router.push("/tornament"))}
            >
              Tournament Mode
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
