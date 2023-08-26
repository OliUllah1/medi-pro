import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt } from "react-icons/fa";

const Navber = () => {
    return (
        <div className='bg-[#07332f] flex px-10 py-3 justify-between'>
           
            <div className=''>
            <Image className='relative object-cover' src="/logo.png" alt="logo" width="200" height="200" />
            </div>
        
           
            <div className='flex items-center gap-10'>
            <ul className='flex items-center gap-10 text-xl text-white font-thin'>
                <li className='text-[#f7a582]'><a href="">Home</a></li>
                <li className='hover:text-[#f7a582]'><a href="">About Us</a></li>
                <li className='hover:text-[#f7a582]'><a href=""></a>Services</li>
                <li className='hover:text-[#f7a582]'><a href="">Pages</a></li>
                <li className='hover:text-[#f7a582]'><a href="">Contact Us</a></li>
            </ul>
            <button className='flex border-2 px-5 py-3 rounded-full text-[#f7a582] border-[#f7a582] gap-2 font-semibold items-center text-xl'>Make Appointment <FaCalendarAlt></FaCalendarAlt> </button>
            </div>
            
            
        </div>
    );
};

export default Navber;