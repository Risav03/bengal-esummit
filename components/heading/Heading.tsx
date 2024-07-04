import React from 'react'

export const Heading = ({children}: any) => {
  return (
    <h1 className='bg-gradient-to-b from-gray-600 via-gray-200 to-gray-400 text-transparent bg-clip-text text-center w-full mx-auto sm:text-[4rem] text-[2.8rem] font-bold' >{children}</h1>
  )
}
