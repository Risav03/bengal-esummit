"use client"

import { Navbar } from "@/components/sections/Navbar";
import { HomePage } from "@/components/sections/Home";
import Image from "next/image";
import { FootComp } from "@/components/sections/footcomp";
import { About } from "@/components/sections/About";
import { Background } from "@/components/UI/Background";

export default function Home() {
  return (
    <main className="bg-black">
      <Background/>
    <div className="flex min-h-screen relative z-[1] flex-col items-center justify-between sm:p-16 px-4 py-20">
      <Navbar/>
      <HomePage/>
      <About/>
    </div>
    <FootComp/>
    </main>
  );
}
