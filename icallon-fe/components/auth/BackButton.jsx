import React from "react";
import { Button } from "../ui/button";
import Link from 'next/link';

export function BackButton({ href, label }) {
  return (
    <Button variant="link" className="w-full text-black" size='sm' asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
