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
            color: "green"
        },
        {
            event: "Start-up Expo",
            prize: "₹30,000",
            color: "yellow"
        },
        {
            event: "Content Creators Conclave",
            prize: "",
            color: "red"
        },
        {
            event: "Workshops",
            prize: "Giveaways",
            color: "blue"
        },
        {
            event: "Keynote Sessions",
            prize: "Giveaways",
            color: "fuchsia"
        },
        {
            event: "Mind Masters",
            prize: "₹15,000",
            color: "sky"
        },
        {
            event: "Chat JPG",
            prize: "₹15,000",
            color: "orange"
        },
        {
            event: "Pitch Perfect",
            prize: "₹15,000",
            color: "cyan"
        },
        {
            event: "Social Media Campaign",
            prize: "₹10,000",
            color: "teal"
        },
        
        
    ]

    type PropTypes = {
        event: string,
        prize: string,
        color:string
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
                            <div className={`w-[25rem] flex flex-col items-center justify-center h-[12rem] bg-white/30 border-white/50 border-[1px] rounded-xl `}>
                                <h2 className='font-semibold text-[1.2rem]'>{item.event}</h2>
                                <h2 className='font-bold text-[1.5rem]'>{item.prize}</h2>
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
