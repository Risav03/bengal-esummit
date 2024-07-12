"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { FootComp } from '@/components/sections/footcomp'
import { Background } from '@/components/UI/Background'
import pdfFile from "../../assets/documents/investopia.pdf"

export default function Events () {

  return (
    <main className="bg-black text-white">
        <Background/>
            <Navbar/>
        <div className='sm:p-16 px-4 py-20 flex min-h-screen flex-col justify-start items-center relative z-[1]'>
            <div className='sm:px-20 px-4 w-full flex flex-col items-center justify-center sticky sm:-top-16 max-sm:-top-28 min-h-screen rounded-t-xl '>
                <Heading>Our Events</Heading>
            </div>
            
            <div className='sm:px-20 px-4 sm:pt-16 pt-20 rounded-t-xl border-t-[2px] min-h-screen border-blue-700 w-full  mt-10 sticky top-0 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-800'>
            <h1 className='bg-gradient-to-b from-blue-600 via-blue-200 to-blue-400 text-transparent bg-clip-text text-center w-full mx-auto sm:text-[3.3rem] text-[2.3rem] font-bold' >Investopia</h1>
            <h1 className='bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 text-transparent bg-clip-text  w-full mx-auto sm:text-[1.3rem] text-[1.5rem] font-bold text-left mb-4 mt-10' >**Template for creation of presentation</h1>
            <div>
            <div className='sm:w-full w-[95%] flex items-center justify-center border-[1px] rounded-xl border-slate-600 shadow-xl shadow-slate-600/50 mb-10'>
            <iframe
                src={pdfFile}
                width="100%"
                height="500px"
                title="Event Brochure"
                style={{ border: 'none', borderRadius: '10px' }}
                ></iframe>
             </div>
            </div>
        </div>


        </div>
        <FootComp/>
    </main>
  )
}
