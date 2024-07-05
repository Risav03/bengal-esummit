import React from 'react'
import { Heading } from '../heading/Heading'
import pdfFile from "../../assets/documents/brochure.pdf"

export const Faqs = () => {
  return (
    <div className='sm:px-20 px-4 sm:py-16 mb-20 w-full flex flex-col items-center justify-center sticky top-0 min-h-screen rounded-t-xl border-t-[2px] border-slate-700 pt-20 bg-gradient-to-b from-slate-900 to-slate-950'>
            <Heading>FAQs</Heading>
            <div className='sm:w-[50rem] w-[95%] border-[1px] rounded-xl border-slate-600 shadow-xl shadow-slate-600/50 my-10'>
            <iframe
          src={pdfFile}
          width="100%"
          height="500px"
          title="Event Brochure"
          style={{ border: 'none', borderRadius: '10px' }}
        ></iframe>
            </div>
    </div>
  )
}
