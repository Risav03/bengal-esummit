"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { Footer } from '@/components/sections/FooterComp'

export default function Page () {

    const [prizeText, setPrizeText] = useState<string|null>("");

    const firstPrize:string = "First Prize"
    const secondPrize:string = "Second Prize"
    const thirdPrize:string = "Third Prize"


  return (
    <main className="bg-black">
        <div className='sm:p-16 px-4 py-20 flex min-h-screen flex-col items-center justify-between'>
            <Navbar/>
            <Heading>Prizes</Heading>
            <div className='flex sm:flex-row max-sm:flex-col gap-20 h-[20rem] items-center'>
                
                <div className='grid grid-flow-col grid-cols-3'>
                    <div onClick={()=>{setPrizeText(secondPrize)}} className='bg-gradient-to-b from-gray-400/70 text-gray-200/70 to-gray-200/5 relative top-12 rounded-t-xl border-t-[1px] flex items-start justify-center h-[9rem] border-gray-300 w-[7rem] text-3xl font-semibold pt-8'>
                        2nd
                    </div>
                    <div onClick={()=>{setPrizeText(firstPrize)}} className='bg-gradient-to-b from-yellow-500/70 text-yellow-200/70 to-yellow-200/5 rounded-t-xl border-t-[1px] flex items-start justify-center h-[12rem] border-yellow-300 w-[7rem] text-3xl font-semibold pt-8'>
                        1st
                    </div>
                    <div onClick={()=>{setPrizeText(thirdPrize)}} className='bg-gradient-to-b from-orange-500/70 text-orange-200/70 to-orange-200/5 relative top-20 rounded-t-xl border-t-[1px] flex items-start justify-center h-[7rem] border-orange-300 w-[7rem] text-3xl font-semibold pt-8'>
                        3rd
                    </div>
                </div>

                {prizeText != "" ? <div className={`p-4 rounded-xl w-[30rem] flex items-center justify-center h-[15rem] border-y-[1px] ${prizeText == firstPrize && "text-yellow-200 border-yellow-400"} ${prizeText == secondPrize && "text-gray-200 border-gray-400"} ${prizeText == thirdPrize && "text-orange-200 border-orange-400"}`}>
                    {prizeText}
                    </div>: <div className='border-y-[1px] w-[30rem] h-[15rem] flex items-center justify-center border-white p-4 rounded-xl'>
                        Click on position
                        </div>}

            </div>

            <Heading>Competetions</Heading>

        </div>
        <Footer/>
    </main>
  )
}
