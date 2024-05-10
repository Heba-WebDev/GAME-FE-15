// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] to-95% w-screen h-screen place-content-center p-4 gap-16">
      <img className="" src="/app_logo.png" alt="App Logo" />
      <div className="flex justify-center">
        <Button asChild size="lg">
          <Link href="#">Start Game</Link>
        </Button>
      </div>
    </div>
  );
}
