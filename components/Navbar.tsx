import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { TbTimeline } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 sm:h-screen max-sm:w-full sm:w-[4rem] flex sm:flex-col items-center justify-center'>

      <button className='absolute sm:top-20 max-sm:right-4'>Register</button>

      <div className='bg-slate-900 sm:w-full w-fit sm:rounded-r-xl max-sm:rounded-b-xl max-sm:flex max-sm:flex-row'>
        <button className='sm:w-full max-sm:w-[4rem] h-[4rem] flex items-center justify-center text-2xl sm:border-b-[1px] max-sm:border-r-[1px] border-slate-800 sm:rounded-tr-xl max-sm:rounded-bl-xl hover:bg-white/10 duration-200'><IoHomeOutline/></button>
        <button className='sm:w-full max-sm:w-[4rem] h-[4rem] flex items-center justify-center text-2xl sm:border-b-[1px] max-sm:border-r-[1px] border-slate-800 hover:bg-white/10 duration-200'><GiTrophyCup/></button>
        <button className='sm:w-full max-sm:w-[4rem] h-[4rem] flex items-center justify-center text-2xl sm:border-b-[1px] max-sm:border-r-[1px] border-slate-800 hover:bg-white/10 duration-200'><TbTimeline/></button>
        <button className='sm:w-full max-sm:w-[4rem] h-[4rem] flex items-center justify-center text-2xl sm:border-b-[1px] max-sm:border-r-[1px] border-slate-800 hover:bg-white/10 duration-200'><AiOutlineTeam/></button>
        <button className='sm:w-full max-sm:w-[4rem] h-[4rem] flex items-center justify-center text-2xl sm:rounded-br-xl max-sm:rounded-br-xl hover:bg-white/10 duration-200'><IoImageOutline/></button>
      </div>

    </div>
  )
}
