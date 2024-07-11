import React from 'react';

export const Bottom = () => {
  return (
    <div className='bg-yellow-200 h-[500px] p-8'>
      <div className='font-bold text-2xl text-center'>
        CONTACT ME
        <p className='font-normal italic text-sm font-serif text-red-400'>Let's Talk About Ideas</p>
      </div>
      
      <div className=' w-full p-4 mt-4 h-[400px]'>
        <form className='space-y-10'>
          <div className=' flex justify-center gap-1 '>
            <label className='p-2' htmlFor='name'>Name:</label>
            <input type='text' id='name' className='p-2 rounded-2xl w-[20%]' placeholder='Your Name'/>
            <label className='p-2' htmlFor='email'>Email:</label>
            <input type='email' id='email' className='w-[20%] p-2 rounded-2xl' placeholder='Your Email' />
          </div>
          <div className='flex justify-center gap-1  w-[100%]'>
            <label className='p-2' htmlFor='subject'>Subject:</label>
            <input type='text' id='subject' className='w-[45%] p-2 rounded-2xl h-[50px] ' placeholder='Subject' />
          </div>
          <div className='flex justify-center gap-1 w-full'>
            <label className='p-2' htmlFor='message'>Message:</label>
            <textarea id='message' className='w-[45%] h-[100px] p-2 rounded-2xl'  placeholder='Your Message'></textarea>
          </div>
          <div className='text-center  w-[75%] flex justify-end '>
            <button type='submit' className='bg-yellow-500 text-black font-bold py-2 px-4 rounded-2xl'>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}