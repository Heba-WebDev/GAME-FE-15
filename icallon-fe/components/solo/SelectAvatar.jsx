import React from "react";
import logo from "/public/app_logo3.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function SelectAvatar({
  data,
  setSelectedAvatar,
  currentPage,
  nextPage,
  selectedAvatar,
  avatars,
}) {
  return (
    <main className="flex flex-col md:flex-row items-center justify-around lg:max-w-6xl lg:px-2">
      {selectedAvatar === null ? (
        data.user.avatar ? (
          <div className="flex flex-col ">
            <Image
              src={data.user.avatar.src}
              alt={data.user.avatar.alt}
              className="w-2/4"
              priority={true}
            />
            {setSelectedAvatar(data.user?.avatar)}
            <Button
              className="px-28 py-9 text-3xl"
              variant="default"
              size="lg"
              onClick={() => nextPage(currentPage)}
            >
              Use Avatar
            </Button>
          </div>
        ) : (
          <div className="gradient-card w-60 md:w-[700px] md:h-[600px] flex justify-center items-center">
            <Image src={logo} alt="logo" className=" w-32 p-4 md:w-[405px] md:h-[165px] lg:p-8" priority={true} />
          </div>
        )
      ) : (
        <div className="flex flex-col gap-4 w-2/5">
          <Image
            src={selectedAvatar?.src}
            alt={selectedAvatar?.alt}
            priority={true}
            className="w-full"
          />

          <Button
            className="px-28 py-9 text-3xl  items-center justify-center hidden md:flex"
            size="lg"
            onClick={() => nextPage(currentPage)}
          >
            Use Avatar
          </Button>
        </div>
      )}

      <section className="w-full p-2">
        <p className="font-normal text-center md:text-4xl pb-8">
          Select a base Avatar to get you started
        </p>
        <div className="grid gap-6 grid-cols-3 items-center justify-center max-w-[500px] mx-auto">
          {avatars.map((avatar, index) => (
            <Image
              key={index}
              src={avatar.src}
              alt={avatar.alt}
              priority={true}
              className="w-28 h-28 lg:w-36 lg:h-36 object-contain cursor-pointer mx-auto bg-[#8FD4D8] hover:border-[#FC9A02] border"
              onClick={() => setSelectedAvatar(avatar)}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <Button
            className=" px-6 py-2  flex md:hidden mt-4"
            size="small"
            onClick={() => nextPage(currentPage)}
          >
            Use Avatar
          </Button>
        </div>
      </section>
    </main>
  );
}
