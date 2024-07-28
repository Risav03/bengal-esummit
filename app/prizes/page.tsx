"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { FootComp } from '@/components/sections/footcomp'
import { Background } from '@/components/UI/Background'
import  Image  from 'next/image'
import { IoIosArrowBack } from "react-icons/io";

import investopia from "@/assets/event-images/investopia.png"
import startupexpo from "@/assets/event-images/startupexpo.png"
import content from "@/assets/event-images/content.png"
import workshop from "@/assets/event-images/workshop.png"
import keynote from "@/assets/event-images/keynote.png"
import mindmaster from "@/assets/event-images/mindmaster.png"
import chatjpg from "@/assets/event-images/chatjpg.png"
import pitch from "@/assets/event-images/pitch.png"
import social from "@/assets/event-images/social supernova.jpeg"

import { StaticImageData } from 'next/image'

export default function Page () {

  const [index, setIndex] = useState<number>(0);

    const prizes = [
        {
            event: "Investopia",
            prize: "₹75,000",
            content: "This is Investopia. VCs come and invest.",
            img: investopia,
            link: "https://unstop.com/o/7rjas4h?lb=HT4CJecq",
            color: "bg-green-500/50",
            hoverColor: "hover:bg-green-500/40",
            text: "bg-gradient-to-b from-green-400 via-green-100 to-green-300 text-transparent bg-clip-text"
        },
        {
            event: "Start-up Expo",
            prize: "₹25,000",
            content: "Pitch your startup, earn rewards!",
            img: startupexpo,
            link: "https://unstop.com/o/LmBCAch?lb=HT4CJecq",
            color: "bg-yellow-400/50",
            hoverColor: "hover:bg-yellow-500/40",
            text: "bg-gradient-to-b from-yellow-400 via-yellow-100 to-yellow-300 text-transparent bg-clip-text"
        },
        {
            event: "Content Creators Conclave",
            prize: "Giveaways",
            content: "Meet your fac content creators.",
            img: content,
            link: "",
            color: "bg-red-500/50",
            hoverColor: "hover:bg-red-500/40",
            text: "bg-gradient-to-b from-red-400 via-red-100 to-red-300 text-transparent bg-clip-text"
        },
        {
            event: "Workshops",
            prize: "Giveaways",
            content: "Attend and gain knowledge",
            img: workshop,
            link: "",
            color: "bg-blue-400/50",
            hoverColor: "hover:bg-blue-500/40",
            text: "bg-gradient-to-b from-blue-400 via-blue-100 to-blue-300 text-transparent bg-clip-text"
        },
        {
            event: "Keynote Sessions",
            prize: "Giveaways",
            content: "Attend sessions!!",
            img: keynote,
            link: "",
            color: "bg-fuchsia-400/50",
            hoverColor: "hover:bg-fuchsia-500/40",
            text: "bg-gradient-to-b from-fuchsia-400 via-fuchsia-100 to-fuchsia-300 text-transparent bg-clip-text"
        },
        {
            event: "Mind Masters",
            prize: "₹10,000",
            content: "Business quiz, get money.",
            img: mindmaster,
            link: "https://unstop.com/quiz/mind-masters-bengal-e-summit-the-ultimate-business-quiz-institute-of-engineering-and-management-1074096?lb=HT4CJecq&utm_medium=Share&utm_source=shortUrl",
            color: "bg-sky-500/50",
            hoverColor: "hover:bg-sky-500/40",
            text: "bg-gradient-to-b from-sky-400 via-sky-100 to-sky-300 text-transparent bg-clip-text"
        },
        {
            event: "Chat JPG",
            prize: "₹15,000",
            content: "Enter prompt to generate images.",
            img: chatjpg,
            link: "",
            color: "bg-orange-400/50",
            hoverColor: "hover:bg-orange-500/40",
            text: "bg-gradient-to-b from-orange-400 via-orange-100 to-orange-300 text-transparent bg-clip-text"
        },
        {
            event: "Pitch Perfect",
            prize: "₹15,000",
            content: "Come up with a solution ",
            img: pitch,
            link: "https://unstop.com/competitions/pitch-perfect-bengal-e-summit-2024-institute-of-engineering-and-management-1071933?lb=HT4CJecq",
            color: "bg-cyan-400/50",
            hoverColor: "hover:bg-cyan-500/40",
            text: "bg-gradient-to-b from-cyan-400 via-cyan-100 to-cyan-300 text-transparent bg-clip-text"
        },
        {
            event: "Social SuperNova",
            prize: "₹10,000",
            content: "Like, share and win!",
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
        content: string,
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
        <div className='md:p-16 px-4 py-20 flex min-h-screen flex-col justify-start items-center relative z-[1]'>
            <Heading>Events & Prizes</Heading>
            
            <div className='w-full items-center flex-col flex justify-center my-5'>
                <h3 className='text-white text-center w-full mx-auto md:text-[3rem] text-[2rem] font-bold' >Prizes worth </h3>
                <h3 className='bg-gradient-to-b from-green-800 md:text-[3.2rem] text-[2.3rem] font-bold via-green-400 to-green-600 text-transparent bg-clip-text'>₹1,20,000</h3>
                

                <div className='mx-auto w-full my-5 flex gap-5 items-center justify-center'>
                    
                        <button onClick={()=>{if(index != 0)setIndex(prev => prev-1); else{setIndex(8)}}} className='rounded-full z-[100] hover:bg-white/30 p-3 duration-200'>
                                <IoIosArrowBack className='text-2xl' />
                        </button>
                    <div className='max-md:mt-5 md:w-[50rem] h-[30rem] bg-blue-500/10 rounded-xl p-4'>
                        {prizes.map((item:PropTypes, i)=>(
                        <> {
                            i == index &&
                            <div className='flex max-md:flex-col flex-row gap-4'>
                                <div className=' overflow-hidden rounded-xl'>
                                    <Image src={item.img} alt={item.event} className='md:h-96 md:w-96 w-full object-fill z-[-1] rounded-xl' />
                                </div>
                                <div>
                                    <h2 className={`font-bold group-hover:hidden text-[1.5rem] ${item.text} `}>{item.event}</h2>
                                    <h2 className={`font-semibold brightness-110 group-hover:hidden text-[1.3rem] ${item.text} `}>{item.prize}</h2>

                                    <h3>
                                        {item.content}
                                    </h3>
                                    <a target='_blank' href={item.link} className={`relative my-10 flex flex-col cursor-pointer overflow-hidden items-start justify-center text-blue-500 hover:text-blue-400 hover:-translate-y-1 font-semibold duration-200`}>
                                        Register Now!
                                    </a>
                                </div>
                            </div>
                        }
                            
                        </>
                        ))}
                    </div>
                        <button onClick={()=>{if(index != 8)setIndex(prev => prev+1); else{setIndex(0)}}} className='z-[100] rounded-full hover:bg-white/30 p-3 duration-200'>
                            <IoIosArrowBack className='text-2xl rotate-180' />
                        </button>
                </div>

            </div>

            {/* <Heading>Competetions</Heading>
            --to be added later-- */}
        </div>
        <FootComp/>
    </main>
  )
}
