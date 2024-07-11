import { Timeline } from 'antd'
import React from 'react'
import { LuSparkle } from 'react-icons/lu'
import "./experience.css"

export const Experience = () => {
  return (
    <div className='h-[500px] flex justify-evenly'>
       <div className=' w-full bg-blue-200 h-full flex justify-center'>
        <div className='w-1/2 text-4xl p-28  font-serif'>
        Education
    <div className='mt-20' id="timeline">
  <Timeline 
    mode="left"
    items={[
    
      {
        label:  <div className='pr-5 text-lg font-semibold'>2019-2023</div>,
        dot: <LuSparkle style={{ fontSize: '50px' }} />,
        children: <div className='pl-5 font-black'>University of Ghana
                    <p className='font-mono'> BSc in Computer Science</p></div>,
           
      },

      {
        label: <div className='pr-5 text-lg font-semibold'>2015-2019</div>,
        dot: <LuSparkle style={{ fontSize: '50px' }} />,
        children : <div className='pl-5 font-black pb-3'>Newton International Academy
                   </div>,
      },
      {
        label: <div className='pr-5 text-lg font-semibold'>2015-2019</div>,
        dot: <LuSparkle style={{ fontSize: '50px' }} />,
        children : <div className='pl-5 font-black pb-3'>Newton International Academy
                   </div>,
      },
     
    ]}
  />
  </div>
        {/* <FaStar className='text-2xl'/> */}
        </div>
        <div className='w-1/2 bg-blue-200 text-4xl p-32 font-serif '>
        <h1> Language</h1>
        <div className='flex justify-evenly pt-10'>
         <div className='text-3xl p-5 font-serif'> English 
          <p className='text-base pt-2 text-center'>Fluent</p>
         </div>
        <div className='text-3xl p-5 font-serif'>Twi 
        <p className='text-base pt-2 text-center'>Fluent</p>
        </div>
        <div className='text-3xl p-5 font-serif'>Arabic
        <p className='text-base pt-2 text-center'>Advanced</p>
        </div>
        </div>
        {/* <div className=' pt-10'> Hobbies & Interests
          <div className='flex justify-evenly pt-10'>
        <p className='text-center'> Typing</p>
        <p> Reading</p>
        <p>Designing</p>
        <p>Cooking</p> */}
        </div>
        </div>
        {/* </div>
       </div> */}
    </div>
  )
}

