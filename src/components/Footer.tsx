import React from 'react';
import Image from 'next/image';
import Img01 from '../../public/logo3.png';


import { FaFacebook } from 'react-icons/fa6';
import { LiaLinkedin } from 'react-icons/lia';
import { GrGithub } from 'react-icons/gr';
import { BiLocationPlus, BiPhone} from 'react-icons/bi';
import Link from 'next/link';
import { MdOutlineForwardToInbox } from 'react-icons/md';


function Footer() {
  return (
    <div>

        <footer className='h-[800px] md:h-[417px] w-[100%] bottom-0 bg-gradient-to-br from-[#5B4534] to-[#2A5934] bg-black flex flex-col md:items-center p-10 md:p-0 justify-between md:justify-around text-white  md:pt-[2%]'>

            <div className='flex flex-col md:flex-row justify-evenly md:justify-around items-center md:items-start gap-20 md:gap-28'>

              <div>

                <Image src={Img01} alt='logo' width={1000} height={1000} className='h-[94px] w-[145px]'/>

              </div>

              <div className='h-auto md:h-[229px] w-auto md:w-[605px] flex flex-col md:flex-row items-center gap-16 md:gap-40'>

                 <div>

                   <h3 className='text-[16px] font-bold text-center md:text-start'>Information</h3>
                   <ul className='flex flex-row md:flex-col items-center text-[14px] md:text-[16px] gap-2 md:gap-4 mt-4'>
                      <li><Link href={'/'}>Home</Link></li>
                      <li><Link href={'/about'}>About</Link></li>
                      <li><Link href={'/contact'}>Contact</Link></li>
                      <li><Link href={'/studio'}>Write Blog</Link></li>

                   </ul>

                 </div>


                 <div>

                    <h3 className='text-[16px] font-bold text-center md:text-start'>Contacts</h3>
                    <ul className='flex flex-col gap-8 mt-4'>
                        <li className='flex gap-4'>
                             <BiLocationPlus/>
                            <div>
                                <p>1234 Sample Street</p>
                                <p>Sherpaow Karachi</p>
                            </div>
                        </li>
                        <li className='flex gap-4 mt-4'>
                             <BiPhone/>
                            <p>512.333.2222</p>
                        </li>
                        <li className='flex gap-4'>
                            <MdOutlineForwardToInbox />
                            <p>syedshoaibsherazi412002@gmail.com</p>
                        </li>
                    </ul>

                 </div>

                </div>

              <div className='md:mr-24'>

                <h3 className='text-[16px] font-bold text-center md:text-start'>Social Media</h3>

                <ul className='flex flex-row gap-10 md:gap-10 mt-7'>
                    <li>
                       <FaFacebook size={35}/>
                    </li>
                    <li>
                        <GrGithub size={35}/>
                    </li>
                    <li>
                       <LiaLinkedin size={35}/>
                    </li>

                </ul>

               </div>

            </div>

            <div className='w-full h-[50px] mt-10  pt-[3%] flex justify-center items-center border-t-2 border-opacity-40 border-ftSep
                            md:w-[1440px] md:mt-0'>
                <p className='text-[12px] text-ftText'>© 2025 All Rights Reserved</p>
            </div>

        </footer>


    </div>
  )
}

export default Footer
