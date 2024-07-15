"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { FootComp } from '@/components/sections/footcomp'
import { Background } from '@/components/UI/Background'
import  Image  from 'next/image'

import investopia from "@/assets/event-images/investopia.png"
import startupexpo from "@/assets/event-images/startupexpo.png"
import content from "@/assets/event-images/content.png"
import workshop from "@/assets/event-images/workshop.png"
import keynote from "@/assets/event-images/keynote.png"
import mindmaster from "@/assets/event-images/mindmaster.png"
import chatjpg from "@/assets/event-images/chatjpg.png"
import pitch from "@/assets/event-images/pitch.png"
import social from "@/assets/event-images/social.png"

import { StaticImageData } from 'next/image'

export default function Page () {

  

    const prizes = [
        {
            event: "Investopia",
            prize: "₹75,000",
            img: investopia,
            link: "https://unstop.com/o/7rjas4h?lb=HT4CJecq",
            color: "bg-green-500/50",
            hoverColor: "hover:bg-green-500/40",
            text: "bg-gradient-to-b from-green-400 via-green-100 to-green-300 text-transparent bg-clip-text"
        },
        {
            event: "Start-up Expo",
            prize: "₹25,000",
            img: startupexpo,
            link: "https://unstop.com/o/LmBCAch?lb=HT4CJecq",
            color: "bg-yellow-400/50",
            hoverColor: "hover:bg-yellow-500/40",
            text: "bg-gradient-to-b from-yellow-400 via-yellow-100 to-yellow-300 text-transparent bg-clip-text"
        },
        {
            event: "Content Creators Conclave",
            prize: "Giveaways",
            img: content,
            link: "",
            color: "bg-red-500/50",
            hoverColor: "hover:bg-red-500/40",
            text: "bg-gradient-to-b from-red-400 via-red-100 to-red-300 text-transparent bg-clip-text"
        },
        {
            event: "Workshops",
            prize: "Giveaways",
            img: workshop,
            link: "",
            color: "bg-blue-400/50",
            hoverColor: "hover:bg-blue-500/40",
            text: "bg-gradient-to-b from-blue-400 via-blue-100 to-blue-300 text-transparent bg-clip-text"
        },
        {
            event: "Keynote Sessions",
            prize: "Giveaways",
            img: keynote,
            link: "",
            color: "bg-fuchsia-400/50",
            hoverColor: "hover:bg-fuchsia-500/40",
            text: "bg-gradient-to-b from-fuchsia-400 via-fuchsia-100 to-fuchsia-300 text-transparent bg-clip-text"
        },
        {
            event: "Mind Masters",
            prize: "₹10,000",
            img: mindmaster,
            link: "",
            color: "bg-sky-500/50",
            hoverColor: "hover:bg-sky-500/40",
            text: "bg-gradient-to-b from-sky-400 via-sky-100 to-sky-300 text-transparent bg-clip-text"
        },
        {
            event: "Chat JPG",
            prize: "₹15,000",
            img: chatjpg,
            link: "",
            color: "bg-orange-400/50",
            hoverColor: "hover:bg-orange-500/40",
            text: "bg-gradient-to-b from-orange-400 via-orange-100 to-orange-300 text-transparent bg-clip-text"
        },
        {
            event: "Pitch Perfect",
            prize: "₹15,000",
            img: pitch,
            link: "",
            color: "bg-cyan-400/50",
            hoverColor: "hover:bg-cyan-500/40",
            text: "bg-gradient-to-b from-cyan-400 via-cyan-100 to-cyan-300 text-transparent bg-clip-text"
        },
        {
            event: "Social Media Campaign",
            prize: "₹10,000",
            img: social,
            link: "",
            color: "bg-teal-400/50",
            hoverColor: "hover:bg-teal-500/40",
            text: "bg-gradient-to-b from-teal-400 via-teal-100 to-teal-300 text-transparent bg-clip-text"
        },
        
        
    ]

    type PropTypes = {
        event: string,
        prize: string,
        img: StaticImageData,
        link: string,
        color:string,
        hoverColor: string,
        text:string
    }



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
                            <a target='_blank' href={item.link} className={`w-[25rem] h-[12rem] group relative flex flex-col cursor-pointer overflow-hidden items-center justify-center ${item.color} border-blue-500/30 ${item.hoverColor} duration-200 border-t-[1.5px] border-r-[1.5px] rounded-xl`}>
                                <Image src={item.img} alt={item.event} className=' object-fill absolute z-[-1] -bottom-28' />
                                <h2 className='font-semibold group-hover:hidden text-[1.2rem]'>{item.event}</h2>
                                <h2 className={`font-bold group-hover:hidden text-[2rem] ${item.text}`}>{item.prize}</h2>
                                <h2 className={`font-bold hidden brightness-105 duration-200 group-hover:flex text-[2rem] ${item.text}`}>Register Now!</h2>
                                </a>
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
