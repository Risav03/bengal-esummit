"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { FootComp } from '@/components/sections/footcomp'
import { Background } from '@/components/UI/Background'

export default function Page () {

  return (
    <main className="bg-black text-white">
        <Background/>
        <div className='sm:p-16 px-4 py-20 flex min-h-screen flex-col items-center relative z-[1] justify-between'>
            <Navbar/>
            <Heading>Timeline</Heading>
            

        </div>
        <FootComp/>
    </main>
  )
}
