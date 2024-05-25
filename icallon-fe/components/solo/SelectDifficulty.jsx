import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo2 from "/public/app_logo2.svg";
import sheet from "/public/white_sheet.svg";
import AI_avatar1 from "@/public/AI_avatar1.svg";
import AI_avatar2 from "@/public/AI_avatar2.svg";
import AI_avatar3 from "@/public/AI_avatar3.svg";
import AI_avatar4 from "@/public/AI_avatar4.svg";
import AI_avatar5 from "@/public/AI_avatar5.svg";
import AI_avatar6 from "@/public/AI_avatar6.svg";
import AI_avatar7 from "@/public/AI_avatar7.svg";
import AI_avatar8 from "@/public/AI_avatar8.svg";
import AI_avatar9 from "@/public/AI_avatar9.svg";
import { Button } from "@/components/ui/button";
import TypingAnimation from "./TypingAnimation";

export default function SelectDifficulty({
  data,
  selectedAIAvatar,
  setSelectedAIAvatar,
  currentPage,
  nextPage,
  goBack,
}) {
  const aiAvatarsbeginner = [
    { src: AI_avatar1, alt: "AI avatar 1" },
    { src: AI_avatar2, alt: "AI avatar 2" },
    { src: AI_avatar3, alt: "AI avatar 3" },
  ];

  const aiAvatarsIntermediate = [
    { src: AI_avatar4, alt: "AI avatar 4" },
    { src: AI_avatar5, alt: "AI avatar 5" },
    { src: AI_avatar6, alt: "AI avatar 6" },
  ];

  const aiAvatarsHard = [
    { src: AI_avatar7, alt: "AI avatar 7" },
    { src: AI_avatar8, alt: "AI avatar 8" },
    { src: AI_avatar9, alt: "AI avatar 9" },
  ];

  return (
    <main className=" flex justify-between items-center h-screen w-[80%]">
      <div className="bg-[#404040] h-[80%] w-2/12 p-4 flex flex-col justify-between">
        <div className="flex flex-col items-center gap-4">
          <Image src={logo2} alt="" className="w-36 mx-auto" />
          <Button asChild variant="outline" size="lg">
            <Link href="/learn">Learn</Link>
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4">
          {!data && (
            <>
              {/* <Avatar>
                <AvatarImage src={data.user.avatar?.src} />
                <AvatarFallback>{data.user.avatar?.alt}</AvatarFallback>
              </Avatar> */}

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
      <div className="flex flex-col space-y-4 justify-center w-1/3 h-[80%] ">
        {selectedAIAvatar ? (
          <div className="space-y-10">
            <Image
              src={selectedAIAvatar?.src}
              className="w-full h-36 object-fill"
            />
            <TypingAnimation
              strings={[
                "I  am a defensive opponent designed to gather your word skills",
              ]}
              typeSpeed={10}
              backSpeed={30}
              loop={false}
              className="text-2xl text-input w-full"
            />
          </div>
        ) : (
          <div className="space-y-10">
            <h1 className="text-5xl text-input  text-center w-full">
              Play Vs Icalon
            </h1>
            <TypingAnimation
              strings={["Select Icalon avatar to get started"]}
              typeSpeed={10}
              backSpeed={30}
              loop={false}
              className="text-2xl text-input w-full"
            />
          </div>
        )}

        <Image src={sheet} alt="sheet" className="h-4/5 w-full object-cover" />
      </div>
      <div className="flex flex-col items-center justify-evenly h-full w-1/3 p-8  ">
        <section className="w-full">
          <p className="text-3xl text-center">Beginner</p>
          <div className="grid gap-10 grid-cols-3 ">
            {aiAvatarsbeginner.map((avatar, index) => (
              <Image
                key={index}
                src={avatar.src}
                alt={avatar.alt}
                priority={true}
                className={
                  index == 0
                    ? "w-60 h-36 object-cover cursor-pointer bg-[#8FD4D8] hover:border-[#FC9A02] border"
                    : "w-60 h-36 object-cover cursor-not-allowed bg-[#8FD4D8] hover:border-[#FC9A02] border"
                }
                onClick={() => {
                  if (index == 0) {
                    setSelectedAIAvatar(avatar);
                  }
                }}
              />
            ))}
          </div>
          <p className="text-3xl text-center">Intemdiate</p>
          <div className="grid gap-10 grid-cols-3">
            {aiAvatarsIntermediate.map((avatar, index) => (
              <Image
                key={index}
                src={avatar.src}
                alt={avatar.alt}
                className="w-60 h-36 object-cover cursor-not-allowed bg-[#8FD4D8] hover:border-[#FC9A02] border"
                priority={true}
                onClick={() => {}}
              />
            ))}
          </div>
          <p className="text-3xl text-center">Advance</p>
          <div className="grid gap-10 grid-cols-3">
            {aiAvatarsHard.map((avatar, index) => (
              <Image
                key={index}
                src={avatar.src}
                alt={avatar.alt}
                className="w-60 h-36 object-cover cursor-not-allowed bg-[#8FD4D8] hover:border-[#FC9A02] border"
                priority={true}
                onClick={() => {}}
              />
            ))}
          </div>
        </section>
        <Button
          size="lg"
          className="w-full font-bold"
          onClick={() => {
            // nextPage(currentPage);
          }}
        >
          Continue
        </Button>
      </div>
    </main>
  );
  s;
}
