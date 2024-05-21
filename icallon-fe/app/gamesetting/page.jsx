import { SpeakerLoudIcon } from '@radix-ui/react-icons';
import { Button } from "@/components/ui/button";


export default function gamesetting() {
  return (
    <div className=" top-20 flex flex-col items-center justify-center  relative">
      <div>
      <img src="/icalon.svg" alt="icalon" className="w-28 h-28 shadow-lg shadow-cyan-500/50 mb-6 relative left-96" />
      </div>
      <div className=" relative h-60 w-full max-w-4xl p-6 bg-white shadow-md rounded-md">
        <div className="absolute top-4 left-4 font-bold text-lg">
          <p>Round 1/3</p>
          <p>Current Alphabet: Z</p>
        </div>

        <div className="absolute top-0 right-0 mr-2">
        <img src="/timer-start.svg" alt="timer" className="mr-5 mt-3 w-12 h-12 mb-2 absolute top-0 right-0" />
          <p className='text-sm mt-14'>60 seconds</p>
        </div>

        <div className="flex justify-center items-center space-x-16 mt-20">
          <input type="text" placeholder="Name" className="border p-2 rounded-md w-24" />
          <input type="text" placeholder="Animal" className="border p-2 rounded-md w-24" />
          <input type="text" placeholder="Place" className="border p-2 rounded-md w-24" />
          <input type="text" placeholder="Thing" className="border  p-2 rounded-md w-24" />
        </div>
      </div>

      <div className="flex">
        <img src="/femaleavatar4.svg" alt="femaleavatar4" className="w-28 h-28  shadow-lg shadow-cyan-500/50 absolute start-20 mx-44 mt-6" />
     
        <Button className="p-6 text-lg font-bold absolute  ml-64 mt-6">Submit Response</Button>
      </div>

      <div className='absolute -bottom-36 right-20'>
        <SpeakerLoudIcon className=" w-10 h-10 font-extrabold text-black" />
      </div>
    </div>
  );
}
