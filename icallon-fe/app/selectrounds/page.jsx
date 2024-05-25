"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { SpeakerLoudIcon } from '@radix-ui/react-icons';

export default function SelectRounds() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-stretch p-24">
      <div className="flex flex-row flex-1 overflow-hidden">
        {/* Left Container */}
        <div className="w-1/5 bg-[rgba(26,26,26,1)] flex flex-col justify-between p-4 max-h-[75vh] overflow-y-auto rounded-lg">
          <div className="space-y-4">
            <div className='flex justify-center items-center'>
              <img className="w-28 mx-0 mb-2 px-3 pt-3" src="/app_logo2.svg" alt="App Logo2" />
            </div>
            <Button className="w-full text-lg font-bold">Play</Button>
            <Button className="w-full text-lg font-bold">Puzzle</Button>
            <Button className="w-full text-lg font-bold">Learn</Button>
            <Button className="w-full text-lg font-bold">Social</Button>
          </div>
          <div className="space-y-4">
            <Button className="w-full text-lg font-bold">Sign Up</Button>
            <Button className="w-full text-lg font-bold">Login</Button>
          </div>
        </div>

        {/* Right Container */}
        <div className="avatar">
              {selectedAvatar ? (
                <Image src={selectedAvatar} alt="Selected Avatar" width={30} height={30} />
              ) : (
                <div className="w-12 h-12  absolute right-32  bg-cyan-500/50" />
              )}
            </div>
        <div className="flex-1 flex flex-col p-10 mt-10">
          <div>
            <div className="w-full max-w-4xl p-6 shadow-md rounded-md">
              <div className="mb-4">
                <h1 className="text-xl font-bold mb-2">Select Number of Rounds</h1>
                <div className="flex space-x-14">
                  {['3', '5', '7', '10'].map((round) => (
                    <label key={round} className="flex items-center space-x-2">
                      <input type="radio" name="rounds"  value={round} />
                      <span>{round}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-bold mb-2">Select Categories</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-lg">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Name</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Animal</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Place</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Thing</span>
                    </label>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Book</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Celebrity</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Fruit</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Subject</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="avatar">
              {selectedAvatar ? (
                <Image src={selectedAvatar} alt="Selected Avatar" width={50} height={50} />
              ) : (
                <div className="w-12 h-12 bg-cyan-500/50" />
              )}
            </div>
            <Button className="text-lg font-bold px-10">Continue</Button>
          </div>
        </div>
      </div>

      {/* Bottom Right Loudspeaker Icon */}
      <div className="fixed bottom-10 right-14">
        <SpeakerLoudIcon className=" w-10 h-10 font-extrabold text-black hover:border rounded-full hover:border-sky-500" />
      </div>
    </div>
  );
}


