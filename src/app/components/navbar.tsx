import React from 'react'
import Image from "next/image";
import logo from'./img/Decorative_Letter_E-removebg-preview.png'

export const Navbar = () => {
  return (
    <div className=' w-full h-[80px] my-2 flex p-5'>
       <div className='w-[25%] h-full'>
    <h1 className='text-3xl font-bold font-mono'>Emma.</h1>
        </div>
        <div className='flex justify-center w-[50%] p-3   '>
        <ul className=' gap-5 flex font-medium text-sm'>
            <li>Home</li>
            <li>About</li> 
            <li>Services</li>
            <li>Contact</li>
            </ul> 
            </div>
            
    </div>
  )
}
