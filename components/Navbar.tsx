import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { TbTimeline } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";
import { GiArchiveRegister } from "react-icons/gi";

export const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 sm:h-screen max-sm:w-full sm:w-[4rem] flex sm:flex-col items-center justify-center'>

      <button className='absolute top-20 bg-red-500 p-5 w-[6rem] flex justify-end left-0 font-bold hover:bg-red-400 hover:-translate-x-8 -translate-x-10 duration-200 rounded-r-xl max-sm:hidden'><GiArchiveRegister/></button>
      <button className='absolute top-[90vh] right-5 bg-red-500 p-4 text-2xl font-bold hover:bg-red-400 hover:-translate-y-2 duration-200 sm:hidden rounded-full'><GiArchiveRegister/></button>

      <div className=' sm:w-full sm:rounded-r-xl max-sm:rounded-b-xl max-sm:flex max-sm:flex-row'>
        <button className='sm:w-20 max-sm:w-[4rem] h-[4rem] max-sm:h-[5rem] sm:border-t-[1px] max-sm:border-l-[1px] flex items-center max-sm:items-end max-sm:pb-4 sm:justify-end max-sm:justify-center sm:pr-4 sm:-translate-x-5 max-sm:-translate-y-5 text-2xl sm:border-b-[1px] max-sm:border-r-[1px] border-slate-800 sm:rounded-tr-xl max-sm:rounded-bl-xl bg-slate-900 hover:bg-slate-800 duration-200 group sm:hover:-translate-x-2 max-sm:hover:-translate-y-2 hover:shadow-red-500/50 shadow-2xl'><IoHomeOutline className='text-red-500 group-hover:text-red-400 duration-200'/></button>
        <button className='sm:w-20 max-sm:w-[4rem] h-[4rem] max-sm:h-[5rem] flex items-center max-sm:items-end max-sm:pb-4 sm:justify-end max-sm:justify-center sm:pr-4 sm:-translate-x-5 max-sm:-translate-y-5 text-2xl sm:border-b-[1px] max-sm:border-r-[1px] border-slate-800 bg-slate-900 hover:bg-slate-800 duration-200 group sm:hover:-translate-x-2 max-sm:hover:-translate-y-2 hover:shadow-blue-500/50 shadow-2xl'><GiTrophyCup className='text-blue-500 group-hover:text-blue-400 duration-200'/></button>
        <button className='sm:w-20 max-sm:w-[4rem] h-[4rem] max-sm:h-[5rem] flex items-center max-sm:items-end max-sm:pb-4 sm:justify-end max-sm:justify-center sm:pr-4 sm:-translate-x-5 max-sm:-translate-y-5 text-2xl sm:border-b-[1px] max-sm:border-r-[1px] border-slate-800 bg-slate-900 hover:bg-slate-800 duration-200 group sm:hover:-translate-x-2 max-sm:hover:-translate-y-2 hover:shadow-green-500/50 shadow-2xl'><TbTimeline className='text-green-500 group-hover:text-green-400 duration-200'/></button>
        <button className='sm:w-20 max-sm:w-[4rem] h-[4rem] max-sm:h-[5rem] flex items-center max-sm:items-end max-sm:pb-4 sm:justify-end max-sm:justify-center sm:pr-4 sm:-translate-x-5 max-sm:-translate-y-5 text-2xl sm:border-b-[1px] max-sm:border-r-[1px] border-slate-800 bg-slate-900 hover:bg-slate-800 duration-200 group sm:hover:-translate-x-2 max-sm:hover:-translate-y-2 hover:shadow-orange-500/50 shadow-2xl'><AiOutlineTeam className='text-orange-500 group-hover:text-orange-400 duration-200'/></button>
        <button className='sm:w-20 max-sm:w-[4rem] h-[4rem] max-sm:h-[5rem] flex items-center max-sm:items-end max-sm:pb-4 sm:justify-end max-sm:justify-center sm:pr-4 sm:-translate-x-5 max-sm:-translate-y-5 text-2xl sm:border-b-[1px] max-sm:border-r-[1px] border-slate-800 sm:rounded-br-xl max-sm:rounded-br-xl bg-slate-900 hover:bg-slate-800 duration-200 group sm:hover:-translate-x-2 max-sm:hover:-translate-y-2 hover:shadow-fuchsia-500/50 shadow-2xl'><IoImageOutline className='text-fuchsia-500 group-hover:text-fuchsia-400 duration-200'/></button>
      </div>

    </div>
  )
}
