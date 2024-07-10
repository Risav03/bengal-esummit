"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { FootComp } from '@/components/sections/footcomp'
import { Background } from '@/components/UI/Background'
import img1 from "@/assets/gallery/1.jpg"
import img2 from "@/assets/gallery/2.jpg"
import img3 from "@/assets/gallery/3.jpg"
import img4 from "@/assets/gallery/4.jpg"
import img5 from "@/assets/gallery/5.jpg"
import img6 from "@/assets/gallery/6.jpg"
import img7 from "@/assets/gallery/7.jpg"
import img8 from "@/assets/gallery/8.nef"
import img9 from "@/assets/gallery/9.nef"
import img10 from "@/assets/gallery/10.nef"
import Image from 'next/image'

export default function Page () {

  return (
    <main className="bg-black text-white">
        <Background/>
        <div className='sm:p-16 px-4 py-20 flex min-h-screen flex-col items-center relative z-[1] justify-between'>
            <Navbar />
            <Heading>Gallery</Heading>
            <div className='flex flex-col my-20 max-sm:w-full flex-wrap items-center justify-center gap-10'>
              <div className='flex flex-row gap-10 flex-wrap justify-center'>
                <Image src={img1} alt="img1" className='w-[30rem] max-sm:w-[90%] rounded-xl border-y-[2px] border-blue-600' />
                <Image src={img2} alt="img2"className='w-[30rem] max-sm:w-[90%] rounded-xl border-y-[2px] border-blue-600'/>
              </div>
              <div className='flex flex-row gap-10 flex-wrap justify-center'>
                <Image src={img3} alt="img3" className='w-[30rem] max-sm:w-[90%] rounded-xl border-y-[2px] border-blue-600' />
                <Image src={img4} alt="img4"className='w-[30rem] max-sm:w-[90%] rounded-xl border-y-[2px] border-blue-600'/>
              </div>
              <div className='flex flex-row gap-10 flex-wrap justify-center'>
                <Image src={img5} alt="img3" className='w-[30rem] max-sm:w-[90%] rounded-xl border-y-[2px] border-blue-600' />
                <Image src={img6} alt="img4"className='w-[30rem] max-sm:w-[90%] rounded-xl border-y-[2px] border-blue-600'/>
              </div>
              <div className='flex flex-row gap-10 flex-wrap justify-center'>
                <Image src={img7} alt="img3" className='w-[30rem] max-sm:w-[90%] rounded-xl border-y-[2px] border-blue-600' />
                <Image src={img8} alt="img4"className='w-[30rem] max-sm:w-[90%] rounded-xl border-y-[2px] border-blue-600'/>
              </div>
              <div className='flex flex-row gap-10 flex-wrap justify-center'>
                <Image src={img9} alt="img3" className='w-[30rem] max-sm:w-[90%] rounded-xl border-y-[2px] border-blue-600' />
                <Image src={img10} alt="img4"className='w-[30rem] max-sm:w-[90%] rounded-xl border-y-[2px] border-blue-600'/>
              </div>
            </div>
        </div>
        <FootComp/>
    </main>
  )
}
