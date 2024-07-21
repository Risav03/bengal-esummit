"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { FootComp } from '@/components/sections/footcomp'
import { Background } from '@/components/UI/Background'
import img1 from "@/assets/gallery/1.jpeg"
import img2 from "@/assets/gallery/2.jpeg"
import img3 from "@/assets/gallery/3.jpeg"
import img4 from "@/assets/gallery/4.jpeg"
import img5 from "@/assets/gallery/5.jpeg"
import img6 from "@/assets/gallery/6.jpeg"
import img7 from "@/assets/gallery/7.jpeg"
import img8 from "@/assets/gallery/8.jpeg"
import img9 from "@/assets/gallery/9.jpeg"
import img10 from "@/assets/gallery/10.jpeg"
import img11 from "@/assets/gallery/11.jpeg"
import img12 from "@/assets/gallery/12.jpeg"
import img13 from "@/assets/gallery/13.jpeg"
import img14 from "@/assets/gallery/14.jpeg"

// import img5 from "@/assets/gallery/5.jpg"
// import img6 from "@/assets/gallery/6.jpg"
// import img7 from "@/assets/gallery/7.jpg"
// import img8 from "@/assets/gallery/8.nef"
// import img9 from "@/assets/gallery/9.nef"
// import img10 from "@/assets/gallery/10.nef"
import Image from 'next/image'

export default function Page () {

  return (
    <main className="bg-black text-white">
        <Background/>
        <div className='md:p-16 px-4 py-20 flex min-h-screen flex-col items-center relative z-[1] justify-between'>
            <Navbar />
            <Heading>Creators & Entrepreneur</Heading>
            <div>Revealing Soon</div>
        </div>
        <FootComp/>
    </main>
  )
}
