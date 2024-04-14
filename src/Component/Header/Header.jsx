import React from 'react'
import { useState } from 'react';

export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);


  return (
    <div className='text-2xl shadow-lg font-bold '>
    <div className='w-5/6 h-20 m-auto flex justify-between items-center'>
        <div>Where in the world</div>
        <div className='flex'onClick={()=>{setDarkMode(!darkMode)}}>
            <div className='mx-2'>
                {darkMode ? (
                    <i className="fa-solid fa-moon"></i>
                ):(
                    <i className="fa-regular fa-moon"></i>
                )}
            </div>
            <div>Dark Mode</div>
        </div>
    </div>
    </div>
  )
}
