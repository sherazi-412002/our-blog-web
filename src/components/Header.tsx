'use client'

import Image from 'next/image'
import logo from '../../public/logo3.png';
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react'
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";

function Header() {

  const [isClick,setisClick] = useState(false)

  const toggleNavbar = ():void => {
    setisClick (!isClick)
  }  
 
  return (
    <div>

       <header className='flex justify-between z-10 items-center h-28 p-1  bg-gradient-to-r from-[#5B4534] to-[#2A5934]  text-white left-0 right-0 top-0 w-[100%]  mt-2 fixed'>
        <div>
            <Image src={logo} alt='Logo' width={500} height={500} className=' h-24  w-24 ml-2 sm:m-16 md:ml-14 lg:ml-24 rounded-full'/>
             
        </div>

        <div>
            <ul className=' hidden md:flex justify-between gap-14 text-2xl font-bold mr-20'>
                <Link href={'/'}><li className=' hover:rounded-lg hover:text-[#81C784] hover:scale-100 active:scale-95 p-1'>Home</li></Link>
                <Link href={'/studio'}><li className=' hover:rounded-lg hover:opacity-75 hover:scale-100 active:scale-95 p-1'>Write Blogs</li></Link>
                <Link href={'/about'}><li className=' hover:rounded-lg hover:opacity-75 hover:scale-100 active:scale-95 p-1'>About</li></Link>
                <Link href={'/contact'}><li className=' hover:rounded-lg hover:opacity-75 hover:scale-100 active:scale-95 p-1'>Contact</li></Link>
            </ul>
        </div>


        <div className='md:hidden flex items-center mr-3'>

          <div className='' onClick={toggleNavbar}>
            
            {isClick?(<div><RxCross2 size={40}  color='black'/></div>):(<div><GiHamburgerMenu size={40} color='black' /></div>)}
    
          </div >
        </div>

        
        </header>

        {isClick &&  (
            <div className='md:hidden top-24 right-0 w-full fixed  '>
            <ul className='flex flex-col  text-center pr-4 gap-3 pb-6 pt-6  bg-gradient-to-br from-[#5B4534] to-[#2A5934] text-white text-2xl hover:duration-300 hover:delay-300'>
                <Link href={'/'}><li className=' hover:rounded-lg hover:bg-black hover:text-white hover:scale-100 active:scale-95 ' >Home</li></Link>
                <Link href={'/about'}><li className='hover:rounded-lg hover:bg-black hover:text-white hover:scale-100 active:scale-95  ' >About</li></Link>
                <Link href={'/studio'}><li className='hover:rounded-lg hover:bg-black hover:text-white hover:scale-100 active:scale-95 ' >Write Blogs</li></Link>
                <Link href={'/contact'}><li className='hover:rounded-lg hover:bg-black hover:text-white hover:scale-100 active:scale-95 ' >Contact</li></Link>
                </ul>
            </div>

            )}
       


    </div>
  )
}

export default Header