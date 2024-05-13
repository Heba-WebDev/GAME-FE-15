'clientModules'
"use client"
import { Cross2Icon, SpeakerLoudIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

export default function Avatar() {
  const [previewAvatar, setPreviewAvatar] = useState(null);

  const handlePreview = (event) => {
    setPreviewAvatar(event.target.src);
  };

  return (
    <div className="w-full h-screen p-2 overflow-y-hidden">
    <Cross2Icon width={50} height={50}/>
    <div className="grid w-full md:flex h-screen justify-around items-center">
      {previewAvatar ? (
        <div className="border-2 bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-full md:w-[35%] md:h-[60%] flex justify-center items-center object-contain">
          <img src={previewAvatar} className="w-full md:w-[80%] object-cover" alt="Preview Avatar" />
        </div>
      ) : (
        <div className="border-2 bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-full md:w-[35%] md:h-[60%] flex justify-center items-center object-contain">
          <img src="/app_logo.png" className="w-full md:w-[80%] object-cover" alt="" />
        </div>
      )}

      <div className="md:w-[50%]">
        <h1>Josiah, please select a base Avatar to be onboarded</h1>
        <div className="grid grid-rows-3 grid-flow-col md:grid-rows-3 md:grid-flow-col md:gap-4 space-x-2">
          {/* Add your avatar options here */}
          <img src="/maleavatar1.svg" alt="" onClick={handlePreview} />
          <img src="/femaleavatar1.svg" alt="" onClick={handlePreview} />
          <img src="/maleavatar2.svg" alt="" onClick={handlePreview} />
          <img src="/femaleavatar2.svg" alt="" onClick={handlePreview} />
          <img src="/maleavatar3.svg" alt="" onClick={handlePreview} />
          <img src="/maleavatar4.svg" alt="" onClick={handlePreview} />
          <img src="/femaleavatar4.svg" alt="" onClick={handlePreview} />
          <img src="/femaleavatar5.svg" alt="" onClick={handlePreview} />
          <img src="/femaleavatar6.svg" alt="" onClick={handlePreview} />
        </div>
    <SpeakerLoudIcon width={50} height={50}/>
      </div>
      
    </div>
       
  </div>
);
}

