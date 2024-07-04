import React from 'react'
import Image from 'next/image'
import bg from "@/assets/background/bg.jpg"

export const Background = () => {
  return (
    <Image src={bg} className='w-screen h-screen fixed top-0 left-0' alt='background'/>
  )
}
