import Image from 'next/image';
import { FaArrowRight,FaPlayCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='bg-[#07332f] relative'>
            <Image className='absolute bottom-0 right-10' src="/half-circle-1.png" alt="hero-bg" width="300" height="300" />
            <div className='lg:flex gap-5 px-3 py-10 lg:px-10'>
            <div className='w-full order-2 lg:order-1 mb-10 lg:mb-0 lg:px-10'>
                <h4 className='text-2xl font-semibold text-white mb-5'>WE TACK CARE OF YOUR HEALTH</h4>
                <h1 className='text-6xl text-[#f7a582]  font-semibold'>We Are Providing Best & Affordable Health Care.</h1>
                <p className='my-6 font-semibold text-lg lg:pr-10 text-gray-400'>our is to deliver the highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.</p>
                <div className='flex gap-10 items-center'>
                    <button className='flex gap-2 border-2 border-white px-10 lg:text-xl text-lg font-semibold py-3 rounded-full text-white items-center hover:text-[#1f3f37] hover:bg-[#f7a582] transition delay-75 duration-75 ease-in-out'>Read More <FaArrowRight></FaArrowRight> </button>
                    <button className='flex gap-2 text-lg lg:text-xl items-center text-white font-semibold hover:text-[#f7a582]'> <FaPlayCircle></FaPlayCircle> Watch Video</button>
                </div>
            </div>
            <div className='w-full order-1 lg:order-2 relative'>
                <Image className='absolute top-0 opacity-5 left-16 flex z-0' src="/home-hero-bg.png" alt="hero-bg" width="200" height="200" />
                
            <div className='flex z-50 gap-5'>
                <div className='pt-20'>
                <Image className='rounded-full' src="/home-hero2.jpg" alt="hero-2" width="250" height="400" />
                </div>
                <div>
                <Image className='rounded-full overflow-hidden' src="/home-hero1.jpg" alt="hero-1" width="250" height="400" />
                </div>
                
                </div>
               
                
            
            </div>
            </div>
        </div>
    );
};

export default Banner;