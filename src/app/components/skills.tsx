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
    <div className='bg-blue-100 h-[700px] justify-center relative'> 
    <div className='text-center text-blue-400 text-3xl '> My Skillset </div>
      <div className='text-base text-[#c7d0ff] [100px] w-[100px] absolute right-[550px] top-[30px] font-medium '>antd</div> 
      <div className='text-xl text-[#c7d0ff] font-normal h-[100px] w-[100px] absolute left-[1000px] top-[310px]'>Canva</div>
      <div className='h-[100px] text-[#c7d0ff] w-[100px] font-medium text-lg absolute right-[400px] top-[355px]'>Typescript</div>
      <div className='text-2xl text-[#c7d0ff] font-medium absolute top-[60px] right-[250px] '>HTML</div>
      <div className='text-base text-[#c7d0ff] font-semibold flex absolute left-[240px] top-[230px]'>CSS</div>
    <div className='text-xl text-[#c7d0ff] font-serif flex absolute left-[330px] top-[30px] '>Figma</div>
      <div className='text-xl text-[#c7d0ff] font-medium flex absolute left-[550px] top-[340px]'>Tailwind</div>
      <div className= 'text-sm text-[#c7d0ff] font-medium flex absolute left-[620px] top-[150px]'>next.js</div>
      
      <h1> </h1>
      <div className='w-full h-[300px] flex justify-center space-x-40 p-24' >
        {skillsimages.map(({id,img}) => (
       <div key={id} className='bg-white w-[8%] p-6 rounded-2xl h-[140px] frontend, UI/UX,'>
       <Image src={img} alt='figma' className='h-[100px] w-[100px]'/>
        </div> 
))} 

      </div>
    </div>
  )
}
