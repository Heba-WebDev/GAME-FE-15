"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import male1 from "/public/maleavatar1.svg";
import male2 from "/public/maleavatar2.svg";
import male3 from "/public/maleavatar3.svg";
import female1 from "/public/femaleavatar1.svg";
import female2 from "/public/femaleavatar2.svg";
import female3 from "/public/femaleavatar3.svg";
import female4 from "/public/femaleavatar4.svg";
import female5 from "/public/femaleavatar5.svg";
import female6 from "/public/femaleavatar6.svg";
import logo from "/public/app_logo.png";
import logo2 from "/public/app_logo2.svg";
import sheet from "/public/white_sheet.svg";

export default function Solo() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [useAvatar, setUseAvatar] = useState(true);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  function handleUseAvatar() {
    setUseAvatar(!useAvatar);
    console.log("works");
  }

  const listOfData = [
    "the player avatar",
    "the player username",
    "icalon avatar",
    "icalon player level",
    "game selection options",
  ];
  console.log(listOfData);

  const avatars = [
    {
      src: female3,
      alt: "Female 3",
    },
    { src: female2, alt: "Female 2" },
    { src: male2, alt: "Male 2" },
    { src: female1, alt: "Female 1" },
    { src: male1, alt: "Male 1" },
    { src: female6, alt: "female 6" },
    { src: female4, alt: "Female 4" },
    { src: female5, alt: "Female 5" },
    { src: male3, alt: "male 3" },
  ];

  return (
    <>
      {useAvatar ? (
        <main className="flex items-center justify-center h-screen gap-20">
          {selectedAvatar === null ? (
            <div className="border-2 border-solid bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] to-95% w-96 h-96 flex justify-center items-center">
              <Image src={logo} alt="logo" className="w-72" />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Image
                src={selectedAvatar.src}
                alt={selectedAvatar.alt}
                className="w-96 h-96"
              />

              <Button
                variant="default"
                size="default"
                onClick={handleUseAvatar}
              >
                Use Avatar
              </Button>
            </div>
          )}

          <section className="w-96">
            <p className="font-normal text-2xl">
              Select a base Avatar to get you started
            </p>
            <div className="flex items-center flex-wrap w-96 gap-4">
              {avatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar.src}
                  alt={avatar.alt}
                  className="w-28 h-20 cursor-pointer"
                  onClick={() => handleAvatarClick(avatar)}
                />
              ))}
            </div>
          </section>
        </main>
      ) : (
        <main className="p-4 flex justify-between items-center h-screen max-w-[85%] mx-auto">
          <div className="bg-[#404040] h-[600px] w-52 p-4 flex flex-col justify-between">
            <div className="flex flex-col items-center gap-4">
              <Image src={logo2} alt="" className="w-36 mx-auto" />
              <Button variant="outline" size="lg">
                <Link href="/learn">Learn</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Button variant="outline" size="lg">
                Sign up
              </Button>
              <Button variant="default" size="lg">
                Log in
              </Button>
            </div>
          </div>
          <div className="space-y-20">
            <h1 className="text-5xl text-[#1a1a1a]">
              Enter your preferred username
            </h1>
            <Image src={sheet} alt="" />
          </div>
          <div className="flex flex-col items-center justify-between h-[600px]">
            <div className="space-y-10">
              <Image src={selectedAvatar.src} alt={selectedAvatar.alt} />
              <input type="text" className="focus:outline-none p-2" />
            </div>
            <Button size="lg">Continue</Button>
          </div>
        </main>
      )}
    </>
  );
}
