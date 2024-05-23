"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
// import sound from "/public/sounds/soft-piano-100-bpm.mp3"
import { getSession, signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export default function Solo() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [useAvatar, setUseAvatar] = useState(true);
  const router = useRouter();
  const { data, status, update } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      console.log("not loggedin");
      redirect("/");
    },
  });

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);

    // const session = getSession();
    // console.log(session);
  };

  function handleUseAvatar() {
    setUseAvatar(!useAvatar);
    updateSessionData();
    console.log(data);
  }
  const updateSessionData = async () => {
    await update({
      ...data,
      user: {
        ...data?.user,
        avatar: selectedAvatar,
      },
      token: data?.token,
    });
  };
  const listOfData = [
    "the player avatar",
    "the player username",
    "icalon avatar",
    "icalon player level",
    "game selection options",
  ];
  console.log(listOfData);

  if (status === "loading") {
    return <div>Loading....</div>;
  }

  const avatars = [
    { src: female3, alt: "Female 3" },
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
    <div className="flex items-center justify-center h-screen">
      {useAvatar ? (
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
                  onClick={handleUseAvatar}
                >
                  Use Avatar
                </Button>
              </div>
            ) : (
              <div className="border-2 border-solid bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] to-95% w-2/5 h-5/6 flex justify-center items-center">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-4/5"
                  priority={true}
                />
              </div>
            )
          ) : (
            <div className="flex flex-col gap-4 w-2/5 h-4/5">
              <Image
                src={selectedAvatar?.src}
                alt={selectedAvatar?.alt}
                className="w-full h-full object-"
              />

              <Button
                className="px-28 py-9 text-3xl"
                size="lg"
                onClick={handleUseAvatar}
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
                  onClick={() => handleAvatarClick(avatar)}
                />
              ))}
            </div>
          </section>
        </main>
      ) : (
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

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => getSession()}
                  >
                    Login
                  </Button>
                </>
              )}
              <Button
                variant="default"
                size="lg"
                onClick={() => setUseAvatar(true)}
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
                <Image
                  src={data.user.avatar?.src}
                  alt={data.user.avatar?.alt}
                />
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
                router.push("/gamesetting");
              }}
            >
              Continue
            </Button>
          </div>
        </main>
      )}
    </div>
  );
}
