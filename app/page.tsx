import { Navbar } from "@/components/sections/Navbar";
import { HomePage } from "@/components/sections/Home";
import Image from "next/image";
import { Footer } from "@/components/sections/FooterComp";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <main className="bg-black">

    <div className="flex min-h-screen flex-col items-center justify-between sm:p-16 px-4 py-20">
      <Navbar/>
      <HomePage/>
      <About/>
    </div>
    <Footer/>
    </main>
  );
}
