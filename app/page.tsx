import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/components/Home";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-16 px-4 py-10">
      <Navbar/>
      <HomePage/>
    </main>
  );
}
