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
// import sound from "/public/sounds/soft-piano-100-bpm.mp3"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SelectAvatar from "@/components/solo/SelectAvatar";
import SetDisplayName from "@/components/solo/SetDisplayName";
import SelectDifficulty from "@/components/solo/SelectDifficulty";
import TypingAnimation from "@/components/solo/TypingAnimation";

export default function Solo() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedAIAvatar, setSelectedAIAvatar] = useState(null);
  const [showSelectAvatar, setShowSelectAvatar] = useState(true);
  const [showSetDisplayName, setshowSetDisplayName] = useState(false);
  const [showSelectDifficulty, setSelectDifficulty] = useState(false);
  const { data, status, update } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      console.log("not loggedin");
      redirect("/");
    },
  });
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

  function goBack(currentPage) {
    switch (currentPage) {
      case showSetDisplayName:
        setshowSetDisplayName(false);
        setShowSelectAvatar(true);
        setSelectDifficulty(false);
        break;
      case showSelectDifficulty:
        setSelectDifficulty(false);
        setshowSetDisplayName(true);
        setShowSelectAvatar(false);
        break;
    }
  }

  function nextPage(currentPage) {
    switch (currentPage) {
      case showSelectAvatar:
        updateSessionData();
        setShowSelectAvatar(false);
        setshowSetDisplayName(true);
        setSelectDifficulty(false);
        break;
      case showSetDisplayName:
        setShowSelectAvatar(false);
        setshowSetDisplayName(false);
        setSelectDifficulty(true);
        break;
    }
  }
  const listOfData = [
    "the player avatar",
    "the player username",
    "icalon avatar",
    "icalon player level",
    "game selection options",
  ];
  //console.log(listOfData);

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
      {showSelectAvatar && (
        <SelectAvatar
          data={data}
          avatars={avatars}
          nextPage={nextPage}
          currentPage={showSelectAvatar}
          selectedAvatar={selectedAvatar}
          setSelectedAvatar={setSelectedAvatar}
        />
      )}
      {showSetDisplayName && (
        <SetDisplayName
          data={data}
          selectedAvatar={selectedAvatar}
          currentPage={showSetDisplayName}
          nextPage={nextPage}
          goBack={goBack}
        />
      )}
      {showSelectDifficulty && (
        <SelectDifficulty
          data={data}
          setSelectedAIAvatar={setSelectedAIAvatar}
          selectedAIAvatar={selectedAIAvatar}
          currentPage={showSelectDifficulty}
          nextPage={nextPage}
          goBack={goBack}
        />
      )}
    </div>
  );
}
