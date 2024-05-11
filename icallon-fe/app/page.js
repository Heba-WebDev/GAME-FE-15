"use client";

// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Home() {
  const [showGameOption, setShowGameOption] = useState(false);
  return (
    <div className="grid bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] to-95% w-screen h-screen place-content-center p-4 gap-16">
      <img className="" src="/app_logo.png" alt="App Logo" />
      <div className="flex justify-center">
        {!showGameOption && (
          <Button
            className="bg-gradient-to-b from-accent via-white/55 to-accent"
            size="lg"
            onClick={() => setShowGameOption(true)}
          >
            Start Game
          </Button>
        )}
        {showGameOption && (
          <div className="grid gap-5 pl-24 pr-24 w-full">
            <Button variant="outline" size="lg">
              <Link href="/start">Solo Game</Link>
            </Button>

            <Button variant="outline" size="lg" onClick={() => signIn('google') } >
              Create/Join a group
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/start">Tornament Mode</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
