"use client"
import Image from 'next/image';
import { FaArrowAltCircleRight ,FaPlayCircle } from "react-icons/fa";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';

const AboutUs = () => {
    return (
        <div className='relative'>
            <Image className='absolute bottom-0 right-10' src="" alt="hero-bg" width="300" height="300" />
            <div className='lg:flex gap-5 px-3 py-20 lg:px-10'>
            <div className='w-full order-2 lg:order-1 mb-10 lg:mb-0 lg:px-10' data-aos="fade-right">
                <h4 className='text-xl text-[#f7a582] mb-4'>ABOUT US</h4>
                <h1 className='text-5xl text-[#07332f] font-medium leading-[55px]'>Caring For The Health <br className='hidden lg:block' /> & Well Being Of <br className='hidden lg:block' /> Family.</h1>
                <p className='my-4 lg:pr-10 text-gray-500'>Our family-centered approach to healthcare ensures that each member of your family receives personalized attention and care tailored to their unique needs. We believe in building strong relationships with our patients, fostering trust.</p>
                <div className='flex gap-10 items-center'>
                <Image className='' src="/testimonial1.png" alt="hero-bg" width="90" height="120" />
                <div className='space-y-3'>
                    <div>
                    <h4 className='font-semibold text-xl text-[#07332f] tracking-[1px]'>Michael Brian</h4>
                    <p className='text-[#f7a582] text-sm font-medium'>Family Physician</p>
                    </div>
                    <hr />
                    <Image className='' src="/about/michael-brian-signature.png" alt="hero-bg" width="100" height="100" />
                </div>
                </div>
            </div>
            <div data-aos="fade-left"  className='w-full order-1 lg:order-2 relative'>
                <Image className='absolute lg:top-10 lg:left-16 flex justify-center z-0' src="/home-about-us-bg2.png" alt="hero-bg" width="400" height="300" />
                
                <Image className='absolute flex justify-center z-10' src="/about/home-about-us-bg1.png" alt="hero-bg" width="600" height="300" />
                
            <div className='flex gap-5'>
                <div className='pt-20 z-20'>
                <Image className='rounded-full' src="/home-hero2.jpg" alt="hero-2" width="250" height="400" />
                </div>
                <div className=' z-30'>
                <Image className='rounded-full' src="/home-hero1.jpg" alt="hero-1" width="250" height="400" />
                </div>
                
                </div>
               
                
            
            </div>
            </div>
        </div>
    );
};

export default AboutUs;