import React from 'react'
import { Heading } from '../heading/Heading'

export const Sponsors = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center'>
        <div className='sm:px-20 px-4 sm:pt-16 w-full flex flex-col items-center justify-center sticky top-0 min-h-screen rounded-t-xl border-t-[2px] border-slate-700 pt-20 bg-gradient-to-b from-slate-900 to-slate-950'>
            <Heading>Our Sponsors</Heading>
        </div>
        <div className='sm:px-20 px-4 sm:pt-16 pt-20 rounded-t-xl border-t-[2px] min-h-screen border-blue-700 w-full  my-10 sticky top-0 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-800'>
            <h1 className='bg-gradient-to-b from-blue-600 via-blue-200 to-blue-400 text-transparent bg-clip-text text-center w-full mx-auto sm:text-[3.3rem] text-[2.3rem] font-bold' >Title</h1>
            <div>
                <h2 className='text-center font-semibold text-[1.5rem]'>-- //   Will be added later   \\ --</h2>
            </div>
        </div>

        <div className='sm:px-20 px-4 sm:pt-16 pt-20 rounded-t-xl border-t-[2px] min-h-screen border-gray-700 w-full  my-10 sticky top-0 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800'>
            <h1 className='bg-gradient-to-b from-gray-700 via-gray-300 to-gray-500 text-transparent bg-clip-text text-center w-full mx-auto sm:text-[3.3rem] text-[2.3rem] font-bold' >Platinum</h1>
            <div>
                <h2 className='text-center font-semibold text-[1.5rem]'>-- //   Will be added later   \\ --</h2>
            </div>
        </div>

        <div className='sm:px-20 px-4 sm:pt-16 pt-20 rounded-t-xl border-t-[2px] min-h-screen border-yellow-700 w-full  my-10 sticky top-0 bg-gradient-to-b from-yellow-900 via-yellow-700 to-yellow-800'>
            <h1 className='bg-gradient-to-b from-yellow-600 via-yellow-200 to-yellow-400 text-transparent bg-clip-text text-center w-full mx-auto sm:text-[3.3rem] text-[2.3rem] font-bold' >Gold</h1>
            <div>
                <h2 className='text-center font-semibold text-[1.5rem]'>-- //   Will be added later   \\ --</h2>
            </div>
        </div>

        <div className='sm:px-20 px-4 sm:pt-16 pt-20 rounded-t-xl border-t-[2px] min-h-screen border-orange-700 w-full  mt-10 sticky top-0 bg-gradient-to-b from-orange-900 via-orange-700 to-orange-800'>
            <h1 className='bg-gradient-to-b from-orange-600 via-orange-200 to-orange-400 text-transparent bg-clip-text text-center w-full mx-auto sm:text-[3.3rem] text-[2.3rem] font-bold' >Bronze</h1>
            <div>
                <h2 className='text-center font-semibold text-[1.5rem]'>-- //   Will be added later   \\ --</h2>
            </div>
        </div>
    </div>
  )
}
