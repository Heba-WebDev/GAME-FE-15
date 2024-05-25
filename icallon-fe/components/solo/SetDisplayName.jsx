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
    <main className=" w-full h-screen md:w-[80%]">
      <nav className=" p-4 flex items-center md:hidden">
      <Button
            variant="ghost"
            size="small"
            onClick={() => goBack(currentPage)}
          >
            <span className=" text-2xl pr-2">&lt;</span> back
          </Button>
      </nav>
      <section className="flex flex-col-reverse md:flex-row md:gap-2 justify-between items-center h-screen w-full px-2 ">
      <div className="bg-[#404040] h-[80%] md:w-[23%] lg:w-2/12 p-4 hidden md:flex flex-col justify-between">
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
      <div className="flex w-full md:w-[515px] flex-col justify-between h-[80%]">
        <h1 className="text-4xl text-input w-full hidden md:block">
          Enter your preferred username
        </h1>
        <Image src={sheet} alt="" className=" w-full object-cover" />
        <Button
          size="small"
          className="w-36 font-bold block md:hidden py-2 mb-2 self-end"
          onClick={() => {
            nextPage(currentPage);
          }}
        >
          Continue
        </Button>
      </div>
      <div className="flex flex-col w-full items-center justify-between h-[80%] md:w-2/12  ">
        <div className=" pt-[50%] space-y-3 md:space-y-4 mb-5 md:mb-0">
          {data.user.avatar ? (
            <Image src={data.user.avatar?.src} alt={data.user.avatar?.alt} className="mx-auto" />
          ) : (
            <Image src={selectedAvatar?.src} alt={selectedAvatar?.alt} className="mx-auto"/>
          )}
          <h1 className="text-input w-full block md:hidden">
          Enter your preferred username
        </h1>
          <input
            type="text"
            placeholder="Display Name"
            className="focus:outline-none p-2 w-full"
            defaultValue={data.user.display_name}
          />
        </div>
        <Button
          size="lg"
          className="w-full font-bold hidden md:block"
          onClick={() => {
            nextPage(currentPage);
          }}
        >
          Continue
        </Button>
      </div>
      </section>
    </main>
  );
}
