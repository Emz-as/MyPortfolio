import React from 'react'
import figma from './img/Figma_s-new-icon-_-Figma-Blog-removebg-preview.png'
import Image from 'next/image'
import Tailwind from './img/Tailwind CSS.png'
export const Skills = () => {
  return (
    <div className='bg-blue-300 h-[700px] justify-inbetween'>
      <Image src={figma} alt='figma' className='h-[100px] w-[100px]'/> 
      <Image src={Tailwind} alt='tailwind' className='h[100px] w-[100px]'/>
      <h1> </h1>
      <div className='bg-green-400 w-full h-[300px]'>
       <div></div> 
        <div></div>
      </div>
    </div>
  )
}
