import React from 'react'
import { Heading } from '../heading/Heading'
import { FaCalendar } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";


export const About = () => {
  return (
    <div className='sm:w-[80%] w-[90%]'>
        <Heading>About Us</Heading>
        <div className='flex flex-col gap-5'>
            <h3 className='text-center font-semibold'>The Institute of Engineering and Management, Kolkata, is thrilled to present E-Summit 2024, a premier event celebrating innovation, entrepreneurship, and technology! Mark your calendars for an action-packed weekend on 27-28th July 2024 at the iconic IEM Gurukul Building in Kolkata.</h3>
            <h3 className='text-center text-gray-300'>Join us for two days of inspiring talks, hands-on workshops, and unparalleled networking opportunities with industry leaders, visionaries, and fellow enthusiasts. Whether you're an aspiring entrepreneur, a tech aficionado, or simply curious about the future of innovation, E-Summit 2024 promises something for everyone!</h3>
            <div>
                <div className='flex gap-2 items-center justify-center'>
                    <FaCalendar className='text-xl'/>
                    <h3 className='font-semibold'>Date: 27-28th July 2024</h3>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <FaMapPin className='text-xl'/>
                    <h3 className='font-semibold'>Venue: IEM Gurukul Building, Kolkata</h3>
                </div>
            </div>
            <h3 className='text-center'>Be part of the movement that's shaping Bengal. Don't miss this chance to connect, learn, and grow. See you at E-Summit 2024!</h3>
        </div>
    </div>
  )
}
