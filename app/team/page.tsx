"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { FootComp } from '@/components/sections/footcomp'
import { Background } from '@/components/UI/Background'
import img1 from "@/assets/team/1.jpg"
import img2 from "@/assets/team/2.jpg"
import img3 from "@/assets/team/3.jpg"
import img4 from "@/assets/team/4.jpg"
import img5 from "@/assets/team/5.jpg"
import img6 from "@/assets/team/6.jpg"
import img7 from "@/assets/team/7.jpg"
import img8 from "@/assets/team/8.jpg"
import img9 from "@/assets/team/9.jpg"
import img10 from "@/assets/team/10.jpg"
import img11 from "@/assets/team/11.jpg"
import img12 from "@/assets/team/12.jpg"
import img13 from "@/assets/team/13.jpg"
import img14 from "@/assets/team/14.png"
import img15 from "@/assets/team/15.jpeg"
import { GalleryImage } from '@/components/UI/GalleryImage'
import { StaticImageData } from 'next/image'

export default function Page () {

  const teamMap = [
    {
      img: img1,
      linkedIn: "",
      name: "Swapneel Chowdhury",
      post: "Event Head"
    },
    {
      img: img2,
      linkedIn: "",
      name: "Sagnik Sinha",
      post: "Event Head"
    },
    {
      img: img3,
      linkedIn: "",
      name: "Spandan Sarkar",
      post: "Event Head"
    },
    {
      img: img4,
      linkedIn: "",
      name: "Megha Biswas",
      post: "Event Head"
    },
    {
      img: img5,
      linkedIn: "",
      name: "Anushka Maji",
      post: "PR Lead"
    },
    {
      img: img6,
      linkedIn: "",
      name: "Ayush Bera",
      post: "Collaboration Lead"
    },
    {
      img: img7,
      linkedIn: "",
      name: "Mayukh Mazumdar",
      post: "Sponsorship Lead"
    },
    {
      img: img8,
      linkedIn: "",
      name: "Anuran De",
      post: "DB & Web Dev Lead"
    },
    {
      img: img9,
      linkedIn: "",
      name: "Prerona Paul",
      post: "PR Lead"
    },
    {
      img: img10,
      linkedIn: "",
      name: "Rajnandini Ghosh",
      post: "Corporate Relations"
    },{
      img: img11,
      linkedIn: "",
      name: "Aahana Chowdhury",
      post: "Content and Logistics Lead"
    },{
      img: img12,
      linkedIn: "",
      name: "Sayantika Neogi",
      post: "Guest Relations"
    },{
      img: img13,
      linkedIn: "",
      name: "Saranya Chattopadhyay",
      post: "Corporate Relations Lead"
    },
    {
      img: img15,
      linkedIn: "https://www.linkedin.com/in/manila-das-523977227/",
      name: "Manila Das",
      post: "PR Lead"
    },
    {
      img: img14,
      linkedIn: "https://www.linkedin.com/in/risavdeb-patra-703971227/",
      name: "Risavdeb Patra",
      post: "Web Dev Lead"
    }
    
  ]

type PropTypes = {
    img:StaticImageData,
    linkedIn:string,
    name:string,
    post:string
}

  return (
    <main className="bg-black text-white">
        <Background/>
        <div className='sm:p-16 px-4 py-20 flex min-h-screen flex-col items-center relative z-[1] justify-between'>
          <Navbar/>
          <Heading>Our Team</Heading>
            
            <div className='flex flex-wrap items-center justify-center gap-10 mt-20 mb-10'>
              {teamMap.map((item:PropTypes)=>(
                <GalleryImage details={item} />
              ))}
            </div>

        </div>
        <FootComp/>
    </main>
  )
}
