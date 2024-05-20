"use client";

// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showGameOption, setShowGameOption] = useState(false);
  const router = useRouter();
  const { data } = useSession();
  return (
    <div className="grid bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] to-95% w-screen h-screen place-content-center p-4 gap-16">
      <img className="" src="/app_logo.png" alt="App Logo" />
      <div className="flex justify-center">
        {!showGameOption && (
          <>
            <Button
              className="bg-gradient-to-b from-accent via-white/55 to-accent"
              size="lg"
              onClick={() => (!data ? signIn() : setShowGameOption(true))}
            >
              Start Game
            </Button>
          </>
        )}
        {showGameOption && (
          <div className="grid gap-5 pl-24 pr-24 w-full">
            <Button
              variant="outline"
              size="lg"
              onClick={() => (!data ? signIn() : router.push("/solo"))}
            >
              Solo Game
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => (!data ? signIn() : router.push("/multiplayer"))}
            >
              Create/Join a group
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => (!data ? signIn() : router.push("/tornament"))}
            >
              Tornament Mode
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
