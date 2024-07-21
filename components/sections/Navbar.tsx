"use client"

import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { TbTimeline } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";
import {VscAccount} from "react-icons/vsc"
import { GiArchiveRegister } from "react-icons/gi";
import { usePathname, useRouter } from 'next/navigation';

export const Navbar = () => {

  const router = useRouter();
  const path = usePathname()

  return (
    <div className='fixed top-0 left-0 z-[999999] md:h-screen max-md:w-full md:w-[4rem] flex md:flex-col items-center justify-center'>

      <a href="https://docs.google.com/forms/d/1XbC47b8Be39CNYPusKcHVZOr6M02mT_2oLQERUG2jYU/viewform?edit_requested=true" target='_blank' className='absolute left-1/2 top-16 bg-red-500 p-5 items-center justify-center flex flex-row gap-4 font-bold hover:bg-red-400 hover:-translate-x-8 -translate-x-10 duration-200 rounded-r-xl max-md:hidden'>Register <GiArchiveRegister/></a>
      <a href="https://docs.google.com/forms/d/1XbC47b8Be39CNYPusKcHVZOr6M02mT_2oLQERUG2jYU/viewform?edit_requested=true" target="_blank" className='absolute top-[85dvh] right-5 bg-red-500 flex gap-2 items-center p-4 text-lg font-bold hover:bg-red-400 hover:-translate-y-2 duration-200 md:hidden rounded-full'>Register <GiArchiveRegister/></a>

      <div className=' md:w-full md:rounded-r-xl max-md:rounded-b-xl max-md:flex max-md:flex-row'>
        <button onClick={()=>{router.push("/")}} className={`md:w-20 max-md:w-[4rem] h-[4rem] max-md:h-[5rem] md:border-t-[1px] max-md:border-l-[1px] flex items-center max-md:items-end max-md:pb-4 md:justify-end max-md:justify-center md:pr-4 md:-translate-x-5 max-md:-translate-y-5 text-2xl md:border-b-[1px] max-md:border-r-[1px] border-slate-800 md:rounded-tr-xl max-md:rounded-bl-xl ${path == "/"? "bg-slate-800" : "bg-slate-900"} hover:bg-slate-800 duration-200 group md:hover:-translate-x-2 max-md:hover:-translate-y-2 hover:shadow-red-500/50 shadow-2xl`}><IoHomeOutline className='text-red-500 group-hover:text-red-400 duration-200'/></button>
        <button onClick={()=>{router.push("/creators")}} className={`md:w-20 max-md:w-[4rem] h-[4rem] max-md:h-[5rem] flex items-center max-md:items-end max-md:pb-4 md:justify-end max-md:justify-center md:pr-4 md:-translate-x-5 max-md:-translate-y-5 text-2xl md:border-b-[1px] max-md:border-r-[1px] border-slate-800 ${path == "/creators"? "bg-slate-800" : "bg-slate-900"} hover:bg-slate-800 duration-200 group md:hover:-translate-x-2 max-md:hover:-translate-y-2 hover:shadow-yellow-500/50 shadow-2xl`}><VscAccount className='text-yellow-500 group-hover:text-yellow-400 duration-200'/></button>
        <button onClick={()=>{router.push("/prizes")}} className={`md:w-20 max-md:w-[4rem] h-[4rem] max-md:h-[5rem] flex items-center max-md:items-end max-md:pb-4 md:justify-end max-md:justify-center md:pr-4 md:-translate-x-5 max-md:-translate-y-5 text-2xl md:border-b-[1px] max-md:border-r-[1px] border-slate-800 ${path == "/prizes"? "bg-slate-800" : "bg-slate-900"} hover:bg-slate-800 duration-200 group md:hover:-translate-x-2 max-md:hover:-translate-y-2 hover:shadow-blue-500/50 shadow-2xl`}><GiTrophyCup className='text-blue-500 group-hover:text-blue-400 duration-200'/></button>
        <button onClick={()=>{router.push("/timeline")}} className={`md:w-20 max-md:w-[4rem] h-[4rem] max-md:h-[5rem] flex items-center max-md:items-end max-md:pb-4 md:justify-end max-md:justify-center md:pr-4 md:-translate-x-5 max-md:-translate-y-5 text-2xl md:border-b-[1px] max-md:border-r-[1px] border-slate-800 ${path == "/timeline"? "bg-slate-800" : "bg-slate-900"} hover:bg-slate-800 duration-200 group md:hover:-translate-x-2 max-md:hover:-translate-y-2 hover:shadow-green-500/50 shadow-2xl`}><TbTimeline className='text-green-500 group-hover:text-green-400 duration-200'/></button>
        <button onClick={()=>{router.push("/team")}} className={`md:w-20 max-md:w-[4rem] h-[4rem] max-md:h-[5rem] flex items-center max-md:items-end max-md:pb-4 md:justify-end max-md:justify-center md:pr-4 md:-translate-x-5 max-md:-translate-y-5 text-2xl md:border-b-[1px] max-md:border-r-[1px] border-slate-800 ${path == "/team"? "bg-slate-800" : "bg-slate-900"} hover:bg-slate-800 duration-200 group md:hover:-translate-x-2 max-md:hover:-translate-y-2 hover:shadow-orange-500/50 shadow-2xl`}><AiOutlineTeam className='text-orange-500 group-hover:text-orange-400 duration-200'/></button>
        <button onClick={()=>{router.push("/gallery")}} className={`md:w-20 max-md:w-[4rem] h-[4rem] max-md:h-[5rem] flex items-center max-md:items-end max-md:pb-4 md:justify-end max-md:justify-center md:pr-4 md:-translate-x-5 max-md:-translate-y-5 text-2xl md:border-b-[1px] max-md:border-r-[1px] border-slate-800 md:rounded-br-xl max-md:rounded-br-xl ${path == "/gallery"? "bg-slate-800" : "bg-slate-900"} hover:bg-slate-800 duration-200 group md:hover:-translate-x-2 max-md:hover:-translate-y-2 hover:shadow-fuchsia-500/50 shadow-2xl`}><IoImageOutline className='text-fuchsia-500 group-hover:text-fuchsia-400 duration-200'/></button>
      </div>

    </div>
  )
}
