import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo2 from "/public/app_logo2.svg";
import sheet from "/public/white_sheet.svg";
import { Button } from "@/components/ui/button";

export default function SetDisplayName({
  data,
  selectedAvatar,
  currentPage,
  nextPage,
  goBack,
}) {

  return (
    <main className=" flex justify-between items-center h-screen w-[80%]">
      <div className="bg-[#404040] h-[80%] w-2/12 p-4 flex flex-col justify-between">
        <div className="flex flex-col items-center gap-4">
          <Image src={logo2} alt="" className="w-36 mx-auto" />
          <Button variant="outline" size="lg">
            <Link href="/learn">Learn</Link>
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4">
          {!data && (
            <>
              <Avatar>
                <AvatarImage src={data.user.avatar?.src} />
                <AvatarFallback>{data.user.avatar?.alt}</AvatarFallback>
              </Avatar>

              <Button variant="outline" size="lg" onClick={() => {}}>
                Login
              </Button>
            </>
          )}
          <Button
            variant="default"
            size="lg"
            onClick={() => goBack(currentPage)}
          >
            Go back
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-between w-2/4 h-[80%] ">
        <h1 className="text-4xl text-input w-full">
          Enter your preferred username
        </h1>
        <Image src={sheet} alt="" className="h-4/5 w-full object-cover" />
      </div>
      <div className="flex flex-col items-center justify-between h-[80%] w-2/12  ">
        <div className=" pt-[50%] space-y-4">
          {data.user.avatar ? (
            <Image src={data.user.avatar?.src} alt={data.user.avatar?.alt} />
          ) : (
            <Image src={selectedAvatar?.src} alt={selectedAvatar?.alt} />
          )}
          <input
            type="text"
            placeholder="Display Name"
            className="focus:outline-none p-2 w-full"
            defaultValue={data.user.display_name}
          />
        </div>
        <Button
          size="lg"
          className="w-full font-bold"
          onClick={() => {
            nextPage(currentPage);
          }}
        >
          Continue
        </Button>
      </div>
    </main>
  );
}
