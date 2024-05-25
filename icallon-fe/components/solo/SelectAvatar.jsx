import React from "react";
import logo from "/public/app_logo.png";
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
    <main className="flex items-center justify-around h-4/5 w-full">
      {selectedAvatar === null ? (
        data.user.avatar ? (
          <div className="flex flex-col h-full ">
            <Image
              src={data.user.avatar.src}
              alt={data.user.avatar.alt}
              className="w-2/4 h-full"
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
          <div className="border-2 border-solid bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] to-95% w-2/5 h-5/6 flex justify-center items-center">
            <Image src={logo} alt="logo" className="w-4/5" priority={true} />
          </div>
        )
      ) : (
        <div className="flex flex-col gap-4 w-2/5 h-4/5">
          <Image
            src={selectedAvatar?.src}
            alt={selectedAvatar?.alt}
            priority={true}
            className="w-full h-full object-"
          />

          <Button
            className="px-28 py-9 text-3xl"
            size="lg"
            onClick={() => nextPage(currentPage)}
          >
            Use Avatar
          </Button>
        </div>
      )}

      <section className="w-2/5 h-4/5">
        <p className="font-normal text-4xl pb-8">
          Select a base Avatar to get you started
        </p>
        <div className="grid gap-10 grid-cols-3">
          {avatars.map((avatar, index) => (
            <Image
              key={index}
              src={avatar.src}
              alt={avatar.alt}
              className="w-60 h-36 object-contain cursor-pointer bg-[#8FD4D8] hover:border-[#FC9A02] border"
              onClick={() => setSelectedAvatar(avatar)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
