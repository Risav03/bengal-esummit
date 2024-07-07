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
import img16 from "assets/team/sp.jpg"
import { GalleryImage } from '@/components/UI/GalleryImage'
import { StaticImageData } from 'next/image'

export default function Page () {

  const teacherMap = [
    {
      img: img16,
      linkedIn: "https://www.linkedin.com/in/dr-sanghamitra-poddar-870312113/",
      name: "Dr. Sanghamitra Poddar",
      post: "Event Head"
    },
    {
      img: img1,
      linkedIn: "https://www.linkedin.com/in/swapneel-chaudhuri-168ba226b/",
      name: "Swapneel Chaudhuri",
      post: "Event Head"
    }
  ]

  const teamMap = [
    {
      img: img1,
      linkedIn: "https://www.linkedin.com/in/swapneel-chaudhuri-168ba226b/",
      name: "Swapneel Chaudhuri",
      post: "Event Head"
    },
    {
      img: img2,
      linkedIn: "https://www.linkedin.com/in/sagnik-sinha/",
      name: "Sagnik Sinha",
      post: "Event Head"
    },
    {
      img: img3,
      linkedIn: "https://www.linkedin.com/in/spandan-sarkar-65523322a/",
      name: "Spandan Sarkar",
      post: "Event Head"
    },
    {
      img: img4,
      linkedIn: "https://www.linkedin.com/in/megha-biswas-0079a8243/",
      name: "Megha Biswas",
      post: "Event Head"
    },
    {
      img: img5,
      linkedIn: "https://www.linkedin.com/in/anushka-maji-1252b124a/",
      name: "Anushka Maji",
      post: "PR Lead"
    },
    {
      img: img15,
      linkedIn: "https://www.linkedin.com/in/manila-das-523977227/",
      name: "Manila Das",
      post: "Social Media Lead"
    },
    {
      img: img14,
      linkedIn: "https://www.linkedin.com/in/risavdeb-patra-703971227/",
      name: "Risavdeb Patra",
      post: "Web Dev Lead"
    },
     {
      img: img8,
      linkedIn: "https://www.linkedin.com/in/anuran-de-7b7083286/",
      name: "Anuran De",
      post: "Database Lead"
    },
     {
      img: img11,
      linkedIn: "https://www.linkedin.com/in/aahana-chowdhury-522837274/",
      name: "Aahana Chowdhury",
      post: "Content and Logistics Lead"
    },
    {
      img: img6,
      linkedIn: "https://www.linkedin.com/in/ayush-bera-b14b39227/",
      name: "Ayush Bera",
      post: "Collaboration Lead"
    },
    {
      img: img7,
      linkedIn: "https://www.linkedin.com/in/mayukh-majumder-83a19620b/",
      name: "Mayukh Mazumdar",
      post: "Sponsorship Lead"
    },
    {img: img13,
      linkedIn: "https://www.linkedin.com/in/saranya-chattopadhyay-06a153230/",
      name: "Saranya Chattopadhay",
      post: "Corporate Relations Lead"},
    {
      img: img9,
      linkedIn: "https://www.linkedin.com/in/prerona-paul-96bb90289/",
      name: "Prerona Paul",
      post: "PR Lead"
    },
    {
      img: img12,
      linkedIn: "https://www.linkedin.com/in/sayantika-neogi-8b5a18274/",
      name: "Sayantika Neogi",
      post: "Guest Relations"
    },{
      img: img10,
      linkedIn: "https://www.linkedin.com/in/rajnandini-ghosh-401518204/",
      name: "Rajnandini Ghosh",
      post: "Corporate Relations"
    },
    
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
          <Heading>Organizers</Heading>
          <div className='flex flex-wrap items-center justify-center gap-10 mt-20 mb-10'>
              {teacherMap.map((item:PropTypes)=>(
                <GalleryImage details={item} />
              ))}
            </div>

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
