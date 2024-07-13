"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { FootComp } from '@/components/sections/footcomp'
import { Background } from '@/components/UI/Background'

export default function Page () {

    const [prizeText, setPrizeText] = useState<string|null>("");
    const [prizeDesc, setPrizeDesc] = useState<string|null>("");

    const firstPrize:string = "First Prize"
    const secondPrize:string = "Second Prize"
    const thirdPrize:string = "Third Prize"

    const firstDesc:string = "--to be added later--";
    const secDesc:string = "--to be added later--";
    const thirdDesc:string = "--to be added later--"

    const prizes = [
        {
            event: "Investopia",
            prize: "₹75,000",
            color: "bg-green-500/60",
            text: "bg-gradient-to-b from-green-400 via-green-100 to-green-300 text-transparent bg-clip-text"
        },
        {
            event: "Start-up Expo",
            prize: "₹25,000",
            color: "bg-yellow-400/60",
            text: "bg-gradient-to-b from-yellow-400 via-yellow-100 to-yellow-300 text-transparent bg-clip-text"
        },
        {
            event: "Content Creators Conclave",
            prize: "Giveaways",
            color: "bg-red-500/60",
            text: "bg-gradient-to-b from-red-400 via-red-100 to-red-300 text-transparent bg-clip-text"
        },
        {
            event: "Workshops",
            prize: "Giveaways",
            color: "bg-blue-400/60",
            text: "bg-gradient-to-b from-blue-400 via-blue-100 to-blue-300 text-transparent bg-clip-text"
        },
        {
            event: "Keynote Sessions",
            prize: "Giveaways",
            color: "bg-fuchsia-400/60",
            text: "bg-gradient-to-b from-fuchsia-400 via-fuchsia-100 to-fuchsia-300 text-transparent bg-clip-text"
        },
        {
            event: "Mind Masters",
            prize: "₹10,000",
            color: "bg-sky-500/60",
            text: "bg-gradient-to-b from-sky-400 via-sky-100 to-sky-300 text-transparent bg-clip-text"
        },
        {
            event: "Chat JPG",
            prize: "₹15,000",
            color: "bg-orange-400/60",
            text: "bg-gradient-to-b from-orange-400 via-orange-100 to-orange-300 text-transparent bg-clip-text"
        },
        {
            event: "Pitch Perfect",
            prize: "₹15,000",
            color: "bg-cyan-400/60",
            text: "bg-gradient-to-b from-cyan-400 via-cyan-100 to-cyan-300 text-transparent bg-clip-text"
        },
        {
            event: "Social Media Campaign",
            prize: "₹10,000",
            color: "bg-teal-400/60",
            text: "bg-gradient-to-b from-teal-400 via-teal-100 to-teal-300 text-transparent bg-clip-text"
        },
        
        
    ]

    type PropTypes = {
        event: string,
        prize: string,
        color:string,
        text:string
    }

    const test:string = "sky"


  return (
    <main className="bg-black text-white">
        <Background/>
            <Navbar/>
        <div className='sm:p-16 px-4 py-20 flex min-h-screen flex-col justify-start items-center relative z-[1]'>
            <Heading>Prizes</Heading>
            
            <div className='w-full items-center flex-col flex justify-center my-5'>
                <h3 className='text-white text-center w-full mx-auto sm:text-[3rem] text-[2rem] font-bold' >Prizes worth </h3>
                <h3 className='bg-gradient-to-b from-green-800 sm:text-[3.2rem] text-[2.3rem] font-bold via-green-400 to-green-600 text-transparent bg-clip-text'>₹1,50,000</h3>
                
                <div className='flex flex-wrap gap-10 items-center mt-10 w-full mx-auto justify-center'>
                    {
                        prizes.map((item:PropTypes)=>(
                            <div className={`w-[25rem] flex flex-col hover:brightness-125 duration-200 items-center justify-center h-[12rem] ${item.color} border-white/50 border-[1px] rounded-xl `}>
                                <h2 className='font-semibold text-[1.2rem]'>{item.event}</h2>
                                <h2 className={`font-bold text-[2rem] ${item.text}`}>{item.prize}</h2>
                                </div>
                        ))
                    }
                </div>

            </div>

            {/* <Heading>Competetions</Heading>
            --to be added later-- */}
        </div>
        <FootComp/>
    </main>
  )
}
