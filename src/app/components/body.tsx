import React from 'react'
import Image from "next/image"
import picture from "./img/picture.jpg"
export const Body = () => {
  return (
    <div className=''>
        <div className=''>
            <h1 className='ml-[5%] font-medium text-2xl mt-8'>About Me</h1>   
       </div>
        <div className= 'flex justify-center relative '>
            <p className='w-[40%] flex absolute text-lg font-serif top-[50px] right-[60px]'>
        {" "}
        Hello! I'm Emma Osei Bonsu, a passionate UI/UX designer with a keen eye for detail and a love for creating intuitive and engaging digital experiences.
                 With a formidable understanding in software development, I bring a unique blend of design and technical skills to every project I undertake.
                I specialize in crafting user interfaces that are not only visually appealing but also highly functional, 
                ensuring a seamless user experience.
                My expertise extends to modern web technologies, including TypeScript, Tailwind CSS, and React,
                which I use to build responsive, dynamic, and accessible web applications.
                Whether I'm sketching wireframes, designing high-fidelity prototypes, or writing clean, efficient code, my goal is always the same: 
                to create products that delight users and drive business success. Let's work together to turn your vision into a reality!
        </p>
        <div>
        <Image src={picture} alt= "picture" className='absolute top-[50px] left-[50px] w-[300px] h-[300px] rounded-full'/>
        </div>
        </div>
    
    </div>
  )
}
