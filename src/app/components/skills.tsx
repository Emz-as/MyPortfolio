import React from 'react'
import figma from './img/Figma_s-new-icon-_-Figma-Blog-removebg-preview.png'
import Image from 'next/image'
import Tailwind from './img/Tailwind CSS.png'
import react from './img/react.new.png'
import canva from './img/Free_Logo_Maker_Create_in_Minutes_on_canva_com-removebg-preview (1).png'
export const Skills = () => {

const skillsimages = [
  { id: 0, img:figma},
  { id: 1, img:Tailwind},
  { id: 2, img:react},
  { id: 3, img:canva},
];

  return (
    <div className='bg-blue-300 h-[700px] justify-center relative'> 
      <div className='h[100px] w-[100px] absolute left-[700px] top-[100px] '>antd</div> 
      <div className='h-[100px] w-[100px] absolute right-[700px] top-[100px] bg-red-800'>Canva</div>
      <div className='h-[100px] w-[100px] absolute left-[700px] top-[400px] bg-red-500'>Typescript</div>
      <div className='text-3xl font- text-center font-serif'>HTML</div>
      <div className='text-xl flex absolute left-[500px] top-[400px] bg-violet-400'>Nextjs</div>
      <div className='text-xl flex absolute left-[500px] top-[400px] bg-violet-400'>CSS</div>
      <div className='text-xl flex absolute left-[400px] bg-zinc-400'>Figma</div>
      <div className='text-xl flex absolute left-[100px] bg-slate-600'>Tailwind</div>
      
      <h1> </h1>
      <div className='bg-green-400 w-full h-[300px] flex justify-center space-x-40 p-10' >
        {skillsimages.map(({id,img}) => (
       <div key={id} className='bg-white w-[8%] p-6 rounded-2xl h-[140px]'>
       <Image src={img} alt='figma' className='h-[100px] w-[100px]'/>
        </div> 
))} 
  <div>react</div>
  <div>canva</div>
      </div>
    </div>
  )
}
