import React from 'react'
import Image from "next/image";
import male1 from "/public/maleavatar1.svg";
import { SpeakerLoudIcon } from '@radix-ui/react-icons'
export default function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center gap-40'>
     <div className='bg-[#404040] h-[80vh] w-[200px]'>

          <img src="male" alt="Logo" className='text-white' />

     </div>
      <div>
      <div className='bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] to-95%  p-5'>

<h1>select number of rounds</h1>
<div className='flex justify-between'>

<div class="flex items-center me-4">
        <input id="yellow-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-600 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for="yellow-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">3</label>
    </div>

   <div className='flex justify-center items-center gap-2'>
        <input type="radio" name="" id=""  />
        <p>5</p>
   </div>
   <div className='flex justify-center items-center gap-2'>
        <input type="radio" name="" id="" />
        <p>7</p>
   </div>
   <div className='flex justify-center items-center gap-2'>
        <input type="radio" name="" id="" />
        <p>10</p>
   </div>
</div>

<h1>Select Categories</h1>
<div className='flex py-6 justify-between'>
         <div className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" className=' rounded-full bg ' />
        
        <p>Name</p>               </div>
   <div className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" />
        <p>Animal</p>
   </div>
   <div className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" />
        <p>Place</p>
   </div>
   <div className='flex justify-center items-center  gap-2'>
        <input type="checkbox" name="" id="" />
        <p>Thing</p>
   </div>
</div>

<div className='flex py-6 justify-between'>
         <div className='flex justify-center items-center' gap-2>
        <input type="checkbox" name="" id="" />
        <p>Books</p>
   </div>
   <div  className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" />
        <p>Celebrities</p>
   </div>
   <div  className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" />
        <p>Fruits</p>
   </div>
   <div  className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" />
        <p>Subjects</p>
   </div>
</div>

</div>
      </div>
       
       <div>
          <img src="male1" alt="" />

       </div>
        
       <div className='absolute -bottom-2 right-20'>
        <SpeakerLoudIcon className=" w-10 h-10 mb-80 font-extrabold text-black" />
      </div>
    </div>
  )
}
