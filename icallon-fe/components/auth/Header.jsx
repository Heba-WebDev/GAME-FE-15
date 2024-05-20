'use client'
export function Header({ label }) {
  return (
    <div className="flex w-full flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold"><img src="/app_logo.png" alt="" width={200} height={200}/></h1>
      <p className="text-lg"> {label}</p>
    </div>
  );
}
