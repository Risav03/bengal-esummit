import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { LiaLinkedin } from 'react-icons/lia'

// type PropType = {
//     img : string,

// }

interface PropTypes{
    img:StaticImageData,
    linkedIn:string,
    name:string,
    post:string
}

export const GalleryImage = ({details}:{details:PropTypes}) => {
  return (
    <div className='h-[17rem] w-[17rem] flex rounded-b-xl my-5 border-b-2 border-blue-500 shadow-xl hover:shadow-blue-400/30 duration-300 shadow-black/50 flex-col items-center bg-gradient-to-b p-2 from-transparent to-black/40' >
        <div className='w-[10rem] h-[10rem] rounded-full -translate-y-10 overflow-hidden'>
            <Image src={details.img} alt={details.name} className=''/>
        </div>
        <h2 className='text-[1.2rem] font-bold'>{details.name}</h2>
        <h2 className='text-[0.8rem] font-semibold text-blue-400'>{details.post}</h2>
        <a href={details.linkedIn} target='_blank' className='my-2' ><LiaLinkedin className='text-4xl text-white hover:text-blue-500 duration-300' /></a>
    </div>
  )
}
