import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
  const Header = () => {
    let Links =[
        {name:"About Us",link:"/"},
        {name:"Profile",link:"/"},
        {name:"Team",link:"/"},
        {name:"Contact",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='w-full fixed top-0 left-0'>
           <div className='ml-10 md:flex items-right justify-between py-4 md:px-10 px-7'>
           <Link to="https://www.neolen.com/" className="flex items-center">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 mr-3"
                    alt="neolen Logo"
                />
            </Link>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto p-4 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-white md: text-zinc-700 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Sign In</button>
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;