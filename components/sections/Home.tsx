"use client"

import React from 'react'
import Image from 'next/image'
import logo from "@/assets/bengal-summit-logo.png"
import { motion } from 'framer-motion';
import leftArrow from "@/assets/leftArrow.png"
import rightArrow from "@/assets/rightArrow.png"

export const HomePage = () => {
  return (
    <div className='sticky top-20 overflow-y-hidden noscr max-w-screen'>
      <div className='h-screen flex items-center justify-center w-screen overflow-x-hidden overflow-y-hidden pb-32'>
        <motion.div
        animate={{ x: [50, 0, 50], opacity:[0.75, 0.5, 0.75] }} // Enter view, then float right-left-right
        transition={{
          duration: 4, // Total duration of the animation
          times: [0, 0.5, 1], // Keyframes for the animation
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="flex items-center justify-center max-md:hidden text-white"
      >
          <Image src={leftArrow} className='w-[40rem] mx-auto' alt="bengal summit logo"/>
        
      </motion.div>
        <motion.div animate={{
          y: [0, 10, 0], // Move 100px to the right and back
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}>
          <Image src={logo} className='w-[90%] mx-auto' alt="bengal summit logo"/>
        </motion.div>
        <motion.div
        animate={{ x: [0, 40, 0], opacity:[0.75, 0.5, 0.75] }} // Enter view, then float right-left-right
        transition={{
          duration: 4, // Total duration of the animation
          times: [0, 0.5, 1], // Keyframes for the animation
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="flex items-center justify-center max-md:hidden text-white"
      >
          <Image src={rightArrow} className='w-[40rem] mx-auto' alt="bengal summit logo"/>
        
      </motion.div>
      </div>
    </div>
  )
}

