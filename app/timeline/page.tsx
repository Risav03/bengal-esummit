"use client"

import { Navbar } from '@/components/sections/Navbar'
import React, { useState } from 'react'
import { Heading } from '@/components/heading/Heading'
import { FootComp } from '@/components/sections/footcomp'
import { Background } from '@/components/UI/Background'

const timelineData = [
  {
    title: "Timeline Title 1",
    date: "2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: "https://via.placeholder.com/150"
  },
  {
    title: "Timeline Title 2",
    date: "2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: "https://via.placeholder.com/150"
  },
  {
    title: "Timeline Title 3",
    date: "2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: "https://via.placeholder.com/150"
  },
  {
    title: "Timeline Title 4",
    date: "2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: "https://via.placeholder.com/150"
  },
  {
    title: "Timeline Title 5",
    date: "2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: "https://via.placeholder.com/150"
  }
]

export default function Page () {

  return (
    <main className="bg-black text-white">
        <Background/>
        <div className='md:p-16 px-4 py-20 flex min-h-screen flex-col items-center relative z-[1] justify-start'>
            <Navbar/>
            <Heading>Timeline</Heading>
            <div className='grid grid-cols-11 gap-y-5 w-full h-fit items-center justify-start mt-10 relative'>
               { timelineData.map((data, index)=>(
                <>
                  <div className={` col-span-5 flex justify-end ${index%2==0 && "opacity-0"} `}>
                    <div className='w-80 h-16 border-blue-500 border-[1px] bg-gradient-to-br from-slate-800 to-slate-700 rounded-full overflow-hidden flex items-center justify-center shaodw-lg shadow-blue-200'>
                      <h3 className='text-white'>
                        {data.title}
                      </h3>
                    </div>
                  </div>
                  <div className=' col-span-1 flex justify-center relative'>
                    <div className={`absolute w-1/2 h-2 bg-gradient-to-b from-blue-500 to-blue-800 -translate-y-1/2 top-1/2 ${index%2==0 ? "right-0" : "left-0"} -z-10`}></div>
                    <div className='w-16 h-16 border-blue-500 border-[1px] bg-gradient-to-br from-slate-800 to-slate-700 rounded-full overflow-hidden flex items-center justify-center shaodw-lg shadow-blue-200'></div>
                  </div>
                  <div className={` col-span-5 flex justify-start ${index%2!=0 && "opacity-0"}`}>
                    <div className='w-80 h-16 border-blue-500 border-[1px] bg-gradient-to-br from-slate-800 to-slate-700 rounded-full overflow-hidden flex items-center justify-center shaodw-lg shadow-blue-200'>
                      <h3 className='text-white'>
                        {data.title}
                      </h3>
                    </div>
                  </div>
                </>
              
              ))}
                <div className='absolute w-2 h-[90%] bg-gradient-to-r from-blue-500 to-blue-800 left-1/2 top-0 -z-10 mt-8 -translate-x-1/2'></div>
            </div>

        </div>
        <FootComp/>
    </main>
  )
}
