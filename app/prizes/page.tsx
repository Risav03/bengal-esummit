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


  return (
    <main className="bg-black text-white">
        <Background/>
            <Navbar/>
        <div className='sm:p-16 px-4 py-20 flex min-h-screen flex-col justify-start items-center relative z-[1]'>
            <Heading>Prizes</Heading>
            {/* <div className='flex sm:flex-row max-sm:flex-col gap-20 h-[20rem] items-center'>

            {prizeText != "" ? <div className={`p-4 rounded-xl sm:w-[30rem] max-sm:w-[95%] flex flex-col items-center justify-start h-[15rem] border-y-[1px] ${prizeText == firstPrize && "text-yellow-200 border-yellow-400"} ${prizeText == secondPrize && "text-gray-200 border-gray-400"} ${prizeText == thirdPrize && "text-orange-200 border-orange-400"}`}>
                    <h2 className='text-[1.5rem] font-bold'>{prizeText}</h2>
                    <p>{prizeDesc}</p>
                    </div>: <div className='border-y-[1px] text-[2rem] font-bold sm:w-[30rem] max-sm:w-[95%] h-[15rem] flex items-center justify-center border-white p-4 rounded-xl'>
                        Click on a position
                        </div>}
                
                <div className='grid grid-flow-col grid-cols-3'>
                    <div onClick={()=>{setPrizeText(secondPrize); setPrizeDesc(secDesc);}} className='cursor-pointer hover:brightness-125 duration-200 hover:-translate-y-2 bg-gradient-to-b from-gray-400/70 text-gray-200/70 to-gray-200/5 relative top-12 rounded-t-xl border-t-[1px] flex items-start justify-center h-[9rem] border-gray-300 sm:w-[7rem] w-[6rem] text-3xl font-semibold pt-8'>
                        2nd
                    </div>
                    <div onClick={()=>{setPrizeText(firstPrize); setPrizeDesc(firstDesc)}} className='cursor-pointer hover:brightness-125 duration-200 hover:-translate-y-2 bg-gradient-to-b from-yellow-500/70 text-yellow-200/70 to-yellow-200/5 rounded-t-xl border-t-[1px] flex items-start justify-center h-[12rem] border-yellow-300 sm:w-[7rem] w-[6rem] text-3xl font-semibold pt-8'>
                        1st
                    </div>
                    <div onClick={()=>{setPrizeText(thirdPrize); setPrizeDesc(thirdDesc)}} className='cursor-pointer hover:brightness-125 duration-200 hover:-translate-y-2 bg-gradient-to-b from-orange-500/70 text-orange-200/70 to-orange-200/5 relative top-20 rounded-t-xl border-t-[1px] flex items-start justify-center h-[7rem] border-orange-300 sm:w-[7rem] w-[6rem] text-3xl font-semibold pt-8'>
                        3rd
                    </div>
                </div>

            </div> */}
            <div className='w-full items-center flex-col flex justify-center mt-20'>
                <h3 className='text-white text-center w-full mx-auto sm:text-[3rem] text-[2rem] font-bold' >Prizes worth </h3>
                <h3 className='bg-gradient-to-b from-green-800 sm:text-[3.2rem] text-[2.3rem] font-bold via-green-400 to-green-600 text-transparent bg-clip-text'>₹1,50,000</h3>
                    <h4>--More to be revealed soon!--</h4>

            </div>

            {/* <Heading>Competetions</Heading>
            --to be added later-- */}
        </div>
        <FootComp/>
    </main>
  )
}
