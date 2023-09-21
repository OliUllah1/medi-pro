'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt,FaBars } from "react-icons/fa";
import { useRouter } from 'next/navigation'

const Navber = () => {
    const router = useRouter()
    return (
        <div className='bg-[#1f3f37] lg:bg-[#07332f] flex px-3 items-center lg:px-10 py-5 lg:py-3 justify-between'>
           
            <div className=''>
            <Image className='' src="/logo.png" alt="logo" width="150" height="150" />
            </div>
        
           <div className=' block lg:hidden'>
           <button className='border-2 w-14 h-14 flex items-center justify-center border-[#f7a582] p-3 rounded-full'><FaBars className='text-5xl text-[#f7a582] '></FaBars></button>
           </div>
            <div className='hidden lg:flex  items-center gap-10'>
            <ul className='flex items-center gap-10 text-xl text-white'>
                <li className='text-[#f7a582]'><Link href="/">Home</Link></li>
                <li className='hover:text-[#f7a582]'><Link href="/about">About Us</Link></li>
                <li className='hover:text-[#f7a582]'><Link href="/services">Services</Link></li>
                
                <li className='hover:text-[#f7a582]'><Link href="">Pages</Link></li>
                <li className='hover:text-[#f7a582]'><Link href="/contact">Contact Us</Link></li>
            </ul>
            <button className='flex border-2 px-5 py-3 rounded-full text-[#f7a582] text-lg border-[#f7a582] gap-2 font-semibold items-center hover:text-[#1f3f37] hover:bg-[#f7a582] transition delay-75 duration-75 ease-in-out' onClick={() => router.push('/appointment')} >Make Appointment <FaCalendarAlt></FaCalendarAlt> </button>
            </div>
            
            
        </div>
    );
};

export default Navber;