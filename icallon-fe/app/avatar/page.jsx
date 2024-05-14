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
    <div className="w-full p-5">
    <Cross2Icon width={50} height={50}/>
    <div className=" md:flex h-[80vh] justify-around items-center w-full">
     <div className='w-full md:w-[50%]'>
     {previewAvatar ? (
        <div className="border-2 bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-full md:w-[50%] md:h-[60vh] flex justify-center items-center object-contain">
          <img src={previewAvatar} className="w-full md:w-[80%]  object-cover" alt="Preview Avatar" />
        </div>
      ) : (
        <div className="border-2 bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-full md:w-[50%] md:h-[60vh] flex justify-center items-center object-contain">
          <img src="/app_logo.png" className="w-full md:w-[80%] object-cover" alt="" />
        </div>
      )}
     </div>

      <div className="">
        <h1>Josiah, please select a base Avatar to be onboarded</h1>
        <div className="grid grid-rows-3 grid-flow-col md:grid-rows-3 md:grid-flow-col md:gap-4 space-x-2">
          {/* Add your avatar options here */}
          <div className='bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-[150px] px-5 hover:border-[#FC9A02] border'>
          <img src="/maleavatar1.svg" alt="" onClick={handlePreview} />

          </div>

          <div className='bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-[150px]  hover:border-[#FC9A02] border'>
          <img src="/femaleavatar1.svg" alt="" onClick={handlePreview} />
          </div>
          <div className='bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-[150px] hover:border-[#FC9A02] border'>
          <img src="/maleavatar2.svg" alt="" onClick={handlePreview} />
          </div>
          <div className='bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-[150px] hover:border-[#FC9A02] border' >
          <img src="/femaleavatar2.svg" alt="" onClick={handlePreview} />

          </div>
          <div className='bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-[150px] hover:border-[#FC9A02] border'>

          <img src="/maleavatar3.svg" alt="" onClick={handlePreview} />
          </div>
          <div  className='bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-[150px] hover:border-[#FC9A02] border'  >
          <img src="/femaleavatar4.svg" alt="" onClick={handlePreview} />

          </div>
          <div className='bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-[150px] hover:border-[#FC9A02] border' >

          <img src="/femaleavatar2.svg" alt="" onClick={handlePreview} />
          </div>
          <div className='bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-[150px] hover:border-[#FC9A02] border' >

          <img src="/femaleavatar3.svg" alt="" onClick={handlePreview} />
          </div>
          <div className='bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] w-[150px] hover:border-[#FC9A02] border' >
          <img src="/maleavatar3.svg" alt="" onClick={handlePreview} />

          </div>
        </div>
      </div>
      
    </div>
       
   <div className='flex justify-between mb-10 px-[10%]'>
    <button className='bg-[#FC9A02] shadow-md p-4 font-extralight'>Use Avatar </button>
    <SpeakerLoudIcon width={50} height={50}/>
   </div>
  </div>
);
}

