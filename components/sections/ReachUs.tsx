import React from 'react'
import { Heading } from '../heading/Heading'

export const ReachUs = () => {
  return (
    <div className='md:px-20 px-4 md:pt-16 max-w-screen w-full flex flex-col items-center justify-start sticky md:-top-16 max-md:-top-28 min-h-screen rounded-t-xl border-t-[2px] border-slate-700 pt-20 bg-gradient-to-b from-slate-900 to-slate-950'>
            <Heading>Reach Us</Heading>
            <div className='my-10'>
              <h2 className='text-2xl text-center'>
                Email Us 👉🏻 <a href="mailto:bengalesummit@gmail.com" className='text-blue-500 underline'>bengalesummit@gmail.com</a>
              </h2>
            </div>
            <div className='md:w-[40rem] w-[95%] h-[25rem] border-[1px] rounded-xl border-slate-600 shadow-xl shadow-slate-600/50 my-10'>
                <iframe className='h-full w-full rounded-xl' id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1255138030992!2d88.43277047122935!3d22.574408499928637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751153ddb371%3A0x816e6fee5a5aac55!2sIEM%20Gurukul%20Building!5e0!3m2!1sen!2sin!4v1681554005746!5m2!1sen!2sin" width={100} title="Google Maps Embed" ></iframe>
            </div>

            
    </div>
  )
}
