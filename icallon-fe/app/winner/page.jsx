import { ClockIcon, SpeakerLoudIcon } from '@radix-ui/react-icons';
import { Button } from "@/components/ui/button";


const WinnersPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white-100/50 p-4">
      <h1 className="text-4xl font-bold mb-6">Congratulations</h1>
      <div className="relative w-full max-w-4xl p-4 rounded-lg shadow-lg">
      <img src="/timer-start.svg" alt="timer" className="absolute top-0 right-0  w-12 h-12" />
        <div className="flex items-center justify-center space-x-4 mb-4">
          <h2 className="text-3xl font-bold ">The winner is Ada</h2>
        </div>
        <div className="flex items-center justify-around mb-4">
          <div className="text-center">
            <img src="/femaleavatar4.svg" alt="Ada" className="w-30 h-30 bg-sky-500 shadow-lg shadow-cyan-500/50 border-4 border-gold-500 mb-2"/>
            <span className="border border-sky-400 block text-md font-bold mt-6">Name: Ada</span>
          </div>
          <div className="relative right-20 mr-20">
          <img src="/cup.svg" alt="Trophy" className="w-12 h-12 " />

          </div>
          <div className="text-center">
            <img src="/icalon.svg" alt="Icalon" className=" shadow-lg shadow-cyan-500/50 border-4  rounded-ful mb-2" />
            <span className="border border-sky-400  block text-md font-bold mt-6">Name: Icalon</span>
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <Button className="bg-blue-500  text-black font-bold m-4 text-lg p-6">Back to homepage</Button>
        <Button className=" text-black font-bold text-lg p-6 m-4 ">Play again</Button>
      </div>
      <div className='absolute bottom-10 right-20'>
        <SpeakerLoudIcon className=" mt-4 font-extrabold text-black w-10 h-10" />
    </div>
    </div>
  );
};

export default WinnersPage;
