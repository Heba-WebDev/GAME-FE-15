"use client";

import { useSession } from "next-auth/react";

export default function start() {
  const { data } = useSession();
  if (data) {
  return <div>loggedin</div>;
  }else{
    return <div>not logged in</div>;
  }
}
