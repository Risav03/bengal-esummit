"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { FootComp } from '@/components/sections/footcomp'
import { Background } from '@/components/UI/Background'
import img1 from "@/assets/team/swap.jpg"
import img2 from "@/assets/team/2.jpg"
import img3 from "@/assets/team/3.jpg"
import img4 from "@/assets/team/4.jpg"
import img5 from "@/assets/team/5.jpeg"
import img6 from "@/assets/team/6.jpg"
import img7 from "@/assets/team/7.jpg"
import img8 from "@/assets/team/8.jpg"
import img9 from "@/assets/team/9.jpg"
import img10 from "@/assets/team/10.jpg"
import img11 from "@/assets/team/aahana.jpg"
import img12 from "@/assets/team/12.jpg"
import img13 from "@/assets/team/13.jpg"
import img14 from "@/assets/team/14.png"
import img15 from "@/assets/team/15.jpeg"
import img16 from "@/assets/team/sp.jpg"
import img17 from "@/assets/team/maloy.jpg"
import img18 from "@/assets/team/subrabhataSir.jpeg"
import img19 from "@/assets/team/abhijeetsir.jpeg"
import meghna from "@/assets/team/meghna.jpeg"

import pritha from "@/assets/team/pritha.jpeg"
import dibya from "@/assets/team/dibyadarshi.png"
import sayak from "@/assets/team/sayak.png"
import soham from "@/assets/team/soham.jpeg"
import tannistha from "@/assets/team/tann.jpeg"

import gobinda from "@/assets/team/gobinda.jpeg"
import sutanu from "@/assets/team/sutanu.jpeg"

import ardhendu from "@/assets/team/ardhendu.jpeg"
import sayan from "@/assets/team/sayan.jpeg"
import indranil from "@/assets/team/indranil.jpg"

import suryangshu from "@/assets/team/suryangshu.jpeg"
import subhradip from "@/assets/team/subradip.jpeg"

import director from "@/assets/team/director.jpeg"

import { GalleryImage } from '@/components/UI/GalleryImage'
import { StaticImageData } from 'next/image'

export default function Page () {

  const president = {
      img: director,
      linkedIn: "https://www.linkedin.com/in/csatyajit/",
      name: "Prof. Dr. Satyajit Chakrabarti",
      post: "Event Organiser"
  }

  const teacherMap = [
    {
      img: img16,
      linkedIn: "https://www.linkedin.com/in/dr-sanghamitra-poddar-870312113/",
      name: "Prof. Dr. Sanghamitra Poddar",
      post: "Event Organiser"
    },
    {
      img: img17,
      linkedIn: "https://www.linkedin.com/in/swapneel-chaudhuri-168ba226b/",
      name: "Prof. Dr. Malay Gangopadhyay",
      post: "Event Organiser"
    },
    {
      img: img18,
      linkedIn: "https://www.linkedin.com/in/subhabrata-banerjee-3aa6ba221/",
      name: "Prof. Dr. Subhabrata Banerjee",
      post: "Event Organiser"
    },
    {
      img: img19,
      linkedIn: "https://in.linkedin.com/in/avijit-bose-29328977",
      name: "Prof. Avijit Bose",
      post: "Event Organiser"
    }, {
      img: indranil,
      linkedIn: "https://www.linkedin.com/in/dr-indranil-maity-0860b662/",
      name: "Prof. Dr. Indranil Maity",
      post: "Event Organiser"
    },
    {
      img: sutanu,
      linkedIn: "https://www.linkedin.com/in/sutanu-ghosh-29a47b1b/",
      name: "Prof. Dr. Sutanu Ghosh",
      post: "Event Organiser"
    },
    {
      img: gobinda,
      linkedIn: "https://www.linkedin.com/in/dr-gobinda-sen-666846a8/",
      name: "Prof. Dr. Gobinda Sen",
      post: "Event Organiser"
    },
    {
      img: sayan,
      linkedIn: "",
      name: "Prof. Sayan Sarkar",
      post: "Event Organiser"
    },
    {
      img: ardhendu,
      linkedIn: "https://www.linkedin.com/in/ardhendu-kundu-6239abab",
      name: "Prof. Ardhendu Kundu",
      post: "Event Organiser"
    },
    
  ]

  const teamMap = [
    {
      img: img1,
      linkedIn: "https://www.linkedin.com/in/swapneel-chaudhuri-168ba226b/",
      name: "Swapneel Chaudhuri",
      post: "Management"
    },
    {
      img: img2,
      linkedIn: "https://www.linkedin.com/in/sagnik-sinha/",
      name: "Sagnik Sinha",
      post: "Management"
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
      img: img6,
      linkedIn: "https://www.linkedin.com/in/ayush-bera-b14b39227/",
      name: "Ayush Bera",
      post: "PR & Collaboration Lead"
    },
    {
      img: img7,
      linkedIn: "https://www.linkedin.com/in/mayukh-majumder-83a19620b/",
      name: "Mayukh Mazumdar",
      post: "Collaboratoion Lead"
    },
    {
      img: pritha,
      linkedIn: "https://www.linkedin.com/in/prithasaha777/",
      name: "Pritha Saha",
      post: "Corporate Relations Lead"
    },
    {
      img: meghna,
      linkedIn: "https://www.linkedin.com/in/meghna-bardhan/",
      name: "Meghna Bardhan",
      post: "Workshop and Guest Relations Lead"
    },
    {
      img: sayak,
      linkedIn: "https://www.linkedin.com/in/sayaksarkar02/",
      name: "Sayak Sarkar",
      post: "Web Dev"
    },
    {img: img13,
      linkedIn: "https://www.linkedin.com/in/saranya-chattopadhyay-06a153230/",
      name: "Saranya Chattopadhyay",
      post: "Outreach Lead"},
    {
      img: tannistha,
      linkedIn: "https://www.linkedin.com/in/tannisthaneogy/",
      name: "Tannistha Neogi",
      post: "Graphics Lead"
    },
    {img: soham,
      linkedIn: "https://www.linkedin.com/in/soham-sengupta-306103228/",
      name: "Soham Sengupta",
      post: "Graphics Lead"},
      {
        img: img4,
        linkedIn: "https://www.linkedin.com/in/megha-biswas-0079a8243/",
        name: "Megha Biswas",
        post: "Social Media Lead"
      },
      {
        img: img3,
        linkedIn: "https://www.linkedin.com/in/spandan-sarkar-65523322a/",
        name: "Spandan Sarkar",
        post: "Collaboration"
      },

    {
      img: dibya,
      linkedIn: "https://www.linkedin.com/in/dibyadarshi-das-b2b985227/",
      name: "Dibyadarshi Das",
      post: "Collaboration"
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
    {
      img: suryangshu,
      linkedIn: "https://www.linkedin.com/in/surjyanshu-ghosh-8015b722a",
      name: "Suryangshu Ghosh",
      post: "Collaboration"
    },
    {
      img: subhradip,
      linkedIn: "https://www.linkedin.com/in/subhradip-sarkar-977b88239/",
      name: "Subhradip Sarkar",
      post: "Collaboration"
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
          <Heading>Organisers</Heading>
          <div className='h-20'></div>
          <GalleryImage details ={president}/>
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
