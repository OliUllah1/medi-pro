import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt,FaBars } from "react-icons/fa";

const Navber = () => {
    return (
        <div className='bg-[#1f3f37] lg:bg-[#07332f] flex px-3 items-center lg:px-10 py-5 lg:py-3 justify-between'>
           
            <div className=''>
            <Image className='' src="/logo.png" alt="logo" width="150" height="150" />
            </div>
        
           <div className=' block lg:hidden'>
           <button className='border-2 w-14 h-14 flex items-center justify-center border-[#f7a582] p-3 rounded-full'><FaBars className='text-5xl text-[#f7a582] '></FaBars></button>
           </div>
            <div className='hidden lg:flex  items-center gap-10'>
            <ul className='flex items-center gap-10 text-lg font-semibold text-white'>
                <li className='text-[#f7a582]'><a href="">Home</a></li>
                <li className='hover:text-[#f7a582]'><a href="">About Us</a></li>
                <li className='hover:text-[#f7a582]'><a href=""></a>Services</li>
                <li className='hover:text-[#f7a582]'><a href="">Pages</a></li>
                <li className='hover:text-[#f7a582]'><a href="">Contact Us</a></li>
            </ul>
            <button className='flex border-2 px-5 py-3 rounded-full text-[#f7a582] text-lg border-[#f7a582] gap-2 font-semibold items-center hover:text-[#1f3f37] hover:bg-[#f7a582] transition delay-75 duration-75 ease-in-out'>Make Appointment <FaCalendarAlt></FaCalendarAlt> </button>
            </div>
            
            
        </div>
    );
};

export default Navber;