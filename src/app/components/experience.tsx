import { Timeline } from 'antd'
import React from 'react'
import { LuSparkle } from 'react-icons/lu'
import "./experience.css"

export const Experience = () => {
  return (
    <div className='h-[700px] flex justify-evenly'>
       <div className=' w-full bg-green-300 h-full flex justify-center'>
        <div className='w-1/2 text-5xl p-32 font-serif'>
        Education
    <div className='mt-20' id="timeline">
  <Timeline 
    mode="left"
    items={[
    
      {
        label:  <div className='pr-5 text-base'>2019-2023</div>,
        dot: <LuSparkle style={{ fontSize: '50px' }} />,
        children: <div className='pl-5 font-blackxl'>University of Ghana
                    <p className='font-mono'> BSc in Computer Science</p></div>,
           
      },

      {
        label: <div className='pr-5 text-base'>2015-2019</div>,
        dot: <LuSparkle style={{ fontSize: '50px' }} />,
        children : <div className='pl-5 font-black'>Newton International Academy
                   </div>,
      },
     
    ]}
  />
  </div>
        {/* <FaStar className='text-2xl'/> */}
        </div>
        <div className='w-1/2 bg-blue-200 text-5xl p-32 font-serif '>
        <h1> Language</h1>
        <div className='flex justify-evenly'>
         <div className='text-3xl p-5 font-serif'> English </div>
        <div className='text-3xl p-5 font-serif'>Twi </div>
        <div className='text-3xl p-5 font-serif'>Arabic</div>

        </div>
        </div>
        
       </div>
    </div>
  )
}

