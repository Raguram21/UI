import React from 'react'

export default function Footer() {
  return (
    <div className='border border-y-slate-300 flex'>
    <div className='p-5'>
     <ul className='flex'>
       <li className='text-xs  ml-3'><a href=''>CREAVTIVE TIM</a></li>
       <li className='text-xs  ml-3'><a href=''>ABOUT US</a></li>
       <li className='text-xs  ml-3'><a href=''>BLOG</a></li>
       <li className='text-xs  ml-3'><a href=''>LICENSES</a></li>
     </ul>
     </div>
     <div className='ml-auto p-5'>
      <p className='text-xs'>
      © 2024 Creative Tim, made with  for a better web
     </p>
     </div>
   </div>
  )
}
