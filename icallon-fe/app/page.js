import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid bg-gradient-landing w-screen h-screen place-content-center p-4 gap-16">
        <img className="" src="/app_logo.png" alt="App Logo" />
        <div>
          <button>startgame</button>
        </div>
      </div>
    </>
  );
}
