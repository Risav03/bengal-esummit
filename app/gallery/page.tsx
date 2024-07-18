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
            <Heading>Gallery</Heading>
            <div className='flex flex-col my-20 max-md:w-full flex-wrap items-center justify-center gap-10'>
              <div className='flex flex-row gap-10 flex-wrap justify-center'>
              <Image src={img1} alt="img1" className='w-[28rem] max-md:w-[70%] max-md:h-[90%] max-h-[18rem] rounded-xl border-y-[2px] border-blue-600' />
              <Image src={img13} alt="img2" className='w-[28rem] max-md:w-[70%] max-md:h-[90%] max-h-[18rem] rounded-xl border-y-[2px] border-blue-600'/>

              </div>
              <div className='flex flex-row gap-10 flex-wrap justify-center'>
              <Image src={img3} alt="img1" className='w-[28rem] max-md:w-[70%] max-md:h-[90%] max-h-[18rem] rounded-xl border-y-[2px] border-blue-600' />
              <Image src={img4} alt="img2" className='w-[28rem] max-md:w-[70%] max-md:h-[90%] max-h-[18rem] rounded-xl border-y-[2px] border-blue-600'/>
              </div>
              <div className='flex flex-row gap-10 flex-wrap justify-center'>
              <Image src={img5} alt="img1" className='w-[28rem] max-md:w-[70%] max-md:h-[90%] max-h-[18rem] rounded-xl border-y-[2px] border-blue-600' />
              <Image src={img6} alt="img2" className='w-[28rem] max-md:w-[70%] max-md:h-[90%] max-h-[18rem] rounded-xl border-y-[2px] border-blue-600'/>
              </div>
              <div className='flex flex-row gap-10 flex-wrap justify-center'>
              <Image src={img7} alt="img1" className='w-[28rem] max-md:w-[70%] max-md:h-[90%] max-h-[18rem] rounded-xl border-y-[2px] border-blue-600' />
              <Image src={img8} alt="img2" className='w-[28rem] max-md:w-[70%] max-md:h-[90%] max-h-[18rem] rounded-xl border-y-[2px] border-blue-600'/>
              </div> 
              <div className='flex flex-row gap-10 flex-wrap justify-center'>
              <Image src={img9} alt="img1" className='w-[28rem] max-md:w-[70%] max-md:h-[90%] max-h-[18rem] rounded-xl border-y-[2px] border-blue-600' />
              <Image src={img11} alt="img2" className='w-[28rem] max-md:w-[70%] max-md:h-[90%] max-h-[18rem] rounded-xl border-y-[2px] border-blue-600'/>
              </div> 
            </div>
        </div>
        <FootComp/>
    </main>
  )
}
