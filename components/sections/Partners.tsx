import React from 'react'
import { Heading } from '../heading/Heading'
import Image from 'next/image'

import casa from '../../assets/partners/casa_amore.png'
import dm4 from '../../assets/partners/d4m.png'
import ecell from '../../assets/partners/ecell.jpg'
import ia from '../../assets/partners/IA.jpg'
import iedc from '../../assets/partners/iedc.png'
import il from '../../assets/partners/il.png'
import lithium from '../../assets/partners/lithium_pills.png'
import nasscom from '../../assets/partners/nasscom.png'
import msme from '@/assets/sponsors/ECELL/MSME.jpeg'
import mantras from '@/assets/sponsors/ECELL/MANTRAS.jpeg'
const partnersList = [
  nasscom, iedc, il, ecell, ia,dm4, casa, lithium,msme,mantras
];


export const Partners = () => {
  return (
    <div className=' md:px-20 px-4 w-[100%] max-w-screen sticky md:-top-16 max-md:-top-60 h-[150vh] min-h-screen flex flex-col items-start justify-start rounded-t-xl border-t-[2px] border-slate-700 py-20 bg-gradient-to-b from-slate-900 to-slate-950 md:py-16'>
        <Heading>Partners</Heading>
        <div className='my-20 w-[90%] mx-auto grid grid-cols-5 items-center justify-center max-md:grid-cols-3 gap-20'>
          {partnersList.map((item, index)=>(
            <div className=' overflow-hidden w-full h-full'>
            <Image src={item} alt="partner1" className='w-full h-full rounded-xl border-[2px] object-contain bg-transparent'/>
          </div>))}
        </div>
    </div>
  )
}
