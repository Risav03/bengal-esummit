import React from 'react'
import { Heading } from '../heading/Heading'
import Bims from '@/assets/sponsors/ECELL/BIMS.jpeg'
import IIM from '@/assets/sponsors/ECELL/IIM CALCUTTA.jpeg'
import IIT from '@/assets/sponsors/ECELL/IIT PATNA.jpeg'
import mantra from '@/assets/sponsors/ECELL/MANTRAS.jpeg'
import msme from '@/assets/sponsors/ECELL/MSME.jpeg'
import agar from '@/assets/sponsors/ECELL/NIT AGARTALA.jpeg'
import dgp from '@/assets/sponsors/ECELL/NIT DURGAPUR.jpeg'

import Image from 'next/image'

import campa from '@/assets/sponsors/FOOD/CAMPA.jpeg'
import kfc from '@/assets/sponsors/FOOD/KFC.jpeg'
import shaw from '@/assets/sponsors/FOOD/SHAW.jpeg'

import friends from '@/assets/sponsors/Media/friendsFM.jpeg'
import mim from '@/assets/sponsors/Media/mim.png'
import kol from '@/assets/sponsors/Media/kolkata.png'
import B from '@/assets/sponsors/Media/B-Prod.jpg'

import momo from '@/assets/sponsors/FOOD/WOW-momo.jpg'
import china from '@/assets/sponsors/FOOD/wow China.jpg'

import dri from '@/assets/sponsors/Travel/Drivers.png'
import wee from '@/assets/sponsors/Travel/wee.jpg'

const medialist =[friends,mim,B]

const socialPart=[
kol
]

const sponsorList = [
    Bims,IIM,IIT,agar,dgp
  ];

const foodList = [
    campa,kfc,momo,china
  ];
  
  const travelist=[
dri,wee
  ]

export const Sponsors = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center max-w-screen'>
        <div className='md:px-20 px-4 md:pt-16 w-full flex flex-col items-center justify-center sticky md:-top-16 max-md:-top-28 min-h-screen rounded-t-xl border-t-[2px] border-slate-700 pt-20 bg-gradient-to-b from-slate-900 to-slate-950'>
            <Heading>Our Collaborators</Heading>
        </div>
        <div className='md:px-20 px-4 md:pt-16 pt-20 rounded-t-xl border-t-[2px] min-h-screen border-blue-700 w-full  my-10 sticky top-0 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-800'>
            <h1 className='bg-gradient-to-b from-blue-600 via-blue-200 to-blue-400 text-transparent bg-clip-text text-center w-full mx-auto md:text-[3.3rem] text-[2.3rem] font-bold' >E-cell Collaborators</h1>
            <div className='my-20 w-[90%] mx-auto grid grid-cols-4 items-center justify-center max-md:grid-cols-3 gap-20'>
            {sponsorList.map((item, index)=>(
                <div className=' overflow-hidden w-full h-full'>
                <Image src={item} alt="partner1" className='w-full h-full rounded-xl border-[2px] object-contain bg-black'/>
                </div>))}
            </div>
        </div>

        <div className='md:px-20 px-4 md:pt-16 pt-20 rounded-t-xl border-t-[2px] min-h-screen border-gray-700 w-full  my-10 sticky top-0 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800'>
            <h1 className='bg-gradient-to-b from-gray-700 via-gray-300 to-gray-500 text-transparent bg-clip-text text-center w-full mx-auto md:text-[3.3rem] text-[2.3rem] font-bold' >Food & Beverages</h1>
            <div className='my-20 w-[70%]  mx-auto grid grid-cols-4 items-center justify-center max-md:grid-cols-2 gap-20 align-middle'>
            {foodList.map((item, index)=>(
                <div className=' overflow-hidden w-full h-full'>
                <Image src={item} alt="partner1" className='w-[20rem] h-full rounded-xl border-[2px] object-contain  bg-black'/>
                </div>))}
            </div>
        </div>

        <div className='md:px-20 px-4 md:pt-16 pt-20 rounded-t-xl border-t-[2px] min-h-screen border-yellow-700 w-full  my-10 sticky top-0 bg-gradient-to-b from-yellow-900 via-yellow-700 to-yellow-800'>
            <h1 className='bg-gradient-to-b from-yellow-600 via-yellow-200 to-yellow-400 text-transparent bg-clip-text text-center w-full mx-auto md:text-[3.3rem] text-[2.3rem] font-bold' >Media</h1>
            <div className='my-20 w-[80%] mx-auto grid grid-cols-3 items-center justify-center max-md:grid-cols-2 gap-20'>
            {medialist.map((item, index)=>(
                <div className=' overflow-hidden w-full h-full'>
                <Image src={item} alt="partner1" className='w-full h-full rounded-xl border-[2px] object-contain bg-black'/>
                </div>))}
            </div>
        </div>
        <div className='md:px-20 px-4 md:pt-16 pt-20 rounded-t-xl border-t-[2px] min-h-screen border-gray-700 w-full  my-10 sticky top-0 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800'>
            <h1 className='bg-gradient-to-b from-green-600 via-green-200 to-green-400 text-transparent bg-clip-text text-center w-full mx-auto md:text-[3.3rem] text-[2.3rem] font-bold' >Travel and Mobility</h1>
            <div className='my-20 w-[80%] mx-auto grid grid-cols-2 items-center justify-center max-md:grid-cols-2 gap-20'>
            {travelist.map((item, index)=>(
                <div className=' overflow-hidden w-full h-full'>
                <Image src={item} alt="partner1" className='w-full h-full rounded-xl border-[2px] object-contain bg-black'/>
                </div>))}
            </div>
        </div>
        <div className='md:px-20 px-4 md:pt-16 pt-20 rounded-t-xl border-t-[2px] min-h-screen border-gray-600 w-full  my-10 sticky top-0 bg-gradient-to-b from-gray-700 via-gray-500 to-gray-600'>
            <h1 className='bg-gradient-to-b from-gray-600 via-gray-200 to-gray-400 text-transparent bg-clip-text text-center w-full mx-auto md:text-[3.3rem] text-[2.3rem] font-bold' >Exclusive Social Media Platform </h1>
            <h1 className='bg-gradient-to-b from-yellow-600 via-yellow-200 to-yellow-400 text-transparent bg-clip-text text-center w-full mx-auto md:text-[3.3rem] text-[2.3rem] font-bold' >⭐️⭐️⭐️⭐️⭐️</h1>
            <div>
            <div className='my-20 w-[40%] mx-auto grid grid-cols-1 items-center justify-center max-md:grid-cols-1 gap-20'>
            {socialPart.map((item, index)=>(
                <div className=' overflow-hidden w-full h-full'>
                <Image src={item} alt="partner1" className='w-full h-full  object-contain bg-transparent'/>
                </div>))}
            </div>  
            </div>
        </div>

    
    </div>
  )
}
