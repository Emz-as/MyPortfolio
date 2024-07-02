import React from 'react'
import Image from "next/image"
import Me from "./img/Animated Antiquities.jpg"
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
export const Body = () => {
  return (
    <div className=' h-[700px]'>
      <h1 className='ml-[10%] font-medium text-2xl mt-8 overline overline-offset-2px decoration-2  text-center'>About Me</h1>   
      <div className='flex justify-center p-4 '>
        <div className=' w-[35%] h-[600px] '>
          <Image src={Me} alt= "picture" className=' w-full h-full rounded-full shadow-2xl '/>
        </div>
        <div className=' w-[30%] h-[500px] p-4'>
        <p className=''>
        Hello! I'm Emma Osei Bonsu, a passionate UI/UX designer with a keen eye for detail and a love for creating intuitive and engaging digital experiences.
                 With a formidable understanding in software development, I bring a unique blend of design and technical skills to every project I undertake.
                I specialize in crafting user interfaces that are not only visually appealing but also highly functional, 
                ensuring a seamless user experience.
                My expertise extends to modern web technologies, including TypeScript, Tailwind CSS, and React,
                which I use to build responsive, dynamic, and accessible web applications.
                Whether I'm sketching wireframes, designing high-fidelity prototypes, or writing clean, efficient code, my goal is always the same: 
                to create products that delight users and drive business success. Let's work together to turn your vision into a reality!
        </p>
        <div className='flex justify-around mt-4 p-4' >
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30} /></a>
            <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
          </div>
        </div>
      </div>

        {/* <div className=' flex justify-center'>          

            <h1 className='ml-[10%] font-medium text-2xl mt-8 overline overline-offset-2px decoration-2 '>About Me</h1>   
       </div>
        <div className= 'flex justify-center '>
            <p className=''>
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
        </div>
        <div className='flex justify-center bg-black' style={{backgroundColor:"black"}}>
        <Image src={picture} alt= "picture" className=''/>
        </div>
     */}
    </div>
  )
}
