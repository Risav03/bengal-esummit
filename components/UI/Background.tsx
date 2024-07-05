import React from 'react'
import Image from 'next/image'
import bg from "@/assets/background/bg.jpg"

export const Background = () => {
  return (
    <div className=''>
      {/* <div className='w-screen h-screen fixed top-0 left-0 bg-black/50 '></div> */}
        <Image src={bg} className='w-screen h-screen fixed top-0 left-0 brightness-90' alt='background'/>
    </div>
  )
}
