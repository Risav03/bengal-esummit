import React from 'react'
import { Heading } from '../heading/Heading'
import pdfFile from "../../assets/documents/brochure.pdf"
import { FootComp } from './footcomp'

export const Faqs = () => {
  return (
    <div className='w-full flex max-w-screen flex-col items-center justify-center sticky md:-top-16 max-md:-top-28 min-h-screen rounded-t-xl border-t-[2px] border-slate-700 pt-20 bg-gradient-to-b from-slate-900 to-slate-950'>
      <div className='md:px-20 px-4 md:py-16 mb-20 '>
            <Heading>FAQs</Heading>
            <div className='md:w-[50rem] w-[95%] border-[1px] rounded-xl border-slate-600 shadow-xl shadow-slate-600/50 my-10'>
            <iframe
          src={pdfFile}
          width="100%"
          height="500px"
          title="Event Brochure"
          style={{ border: 'none', borderRadius: '10px' }}
        ></iframe>
            </div>

      </div>
            <FootComp/>
    </div>
  )
}
