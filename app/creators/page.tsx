"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { FootComp } from '@/components/sections/footcomp'
import { Background } from '@/components/UI/Background'
import Image from 'next/image'

import anindya from '@/assets/creators/anindya.jpeg'
import antidote from '@/assets/creators/antidote.jpeg'
import arindom from '@/assets/creators/arindam.jpeg'
import avipsu from '@/assets/creators/avipsu.jpeg'
import eatverse from '@/assets/creators/eatverse.jpeg'
import kiran from '@/assets/creators/kiran.jpeg'
import kolkata from '@/assets/creators/kolkata deities.jpeg'
import kumaresh from '@/assets/creators/kumaresh.jpeg'
import preeti from '@/assets/creators/preeti.jpeg'
import prerana from '@/assets/creators/prerana.jpeg'
import priyanka from '@/assets/creators/priyanka.jpeg'
import rahul from '@/assets/creators/rahul.jpeg'
import richen from '@/assets/creators/rinchen.jpeg'
import rishi from '@/assets/creators/rishi.jpeg'
import sambeet from '@/assets/creators/sambeet.jpeg'
import sayanta from '@/assets/creators/sayanta.jpeg'
import sidhu from '@/assets/creators/sidhu.jpeg'
import mukul from "@/assets/creators/mukul.jpeg"
import saikat from '@/assets/creators/saikat.jpeg'
import dev from '@/assets/creators/dev.jpeg'
import anus from '@/assets/creators/anusmita.jpeg'
import chater from '@/assets/creators/chaterjee.jpeg'
import  varsha from '@/assets/creators/varsha.jpeg'
import inside from '@/assets/creators/inside-out.jpeg'




const creatorList=[
  sidhu,anindya,antidote,arindom,kiran,kolkata,preeti,prerana,rahul,
  rishi,sayanta,dev,mukul,saikat ,anus,chater,varsha
]

const enterList=[
  avipsu,eatverse,kumaresh,priyanka,richen,sambeet,inside
] 

export default function Page () {

  return (
    <main className="bg-black text-white">
        <Background/>
        <div className='md:p-16 px-4 py-20 flex min-h-screen flex-col items-center relative z-[1] justify-between'>
            <Navbar />
            <Heading>Creators & Entrepreneurs</Heading>
            <div className='my-20 w-[80%] mx-auto grid grid-cols-3 items-center justify-center max-md:grid-cols-2 gap-20'>
            {creatorList.map((item, index)=>(
                <div className=' overflow-hidden w-full h-full'>
                <Image src={item} alt="partner1" className='w-full h-full rounded-xl border-[2px] object-contain bg-black'/>
                </div>))}
            </div> 
        </div>
        <div>
            <div className='my-20 w-[80%] mx-auto grid grid-cols-2 items-center justify-center max-md:grid-cols-2 gap-20'>
            {enterList.map((item, index)=>(
                <div className=' overflow-hidden w-full h-full'>
                <Image src={item} alt="partner1" className='w-full h-full rounded-xl border-[2px] object-contain bg-black'/>
                </div>))}
            </div>
        </div>
        <FootComp/>
    </main>
  )
}
