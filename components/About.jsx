import Image from "next/image";
import { FaPlayCircle,FaCheckCircle,FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-slate-100 lg:flex gap-10 items-center lg:px-10 px-3 lg:py-10 pt-20 pb-10">
            <div className="w-full mb-10 lg:mb-0 relative flex gap-5 items-end">
            <Image  className='absolute bottom-20 left-0 lg:left-20 z-10' src="/home-about-us-bg2.png" alt="hero-2" width="380" height="500" />
            <Image className='rounded-full z-20' src="/home-about1.jpg" alt="hero-2" width="250" height="400" />
            <div className="space-y-4 z-30">
            <Image className='rounded-full' src="/home-hero1.jpg" alt="hero-1" width="250" height="400" />
            <div className="relative">
            <Image className='rounded-full' src="/home-about3.jpg" alt="hero-1" width="250" height="400" />
            <div className="bg-gradient-to-r flex items-center justify-center from-black w-full h-full absolute rounded-full top-0">
                <button className='flex gap-2 text-lg lg:text-xl items-center text-white font-semibold hover:text-[#f7a582]'><FaPlayCircle></FaPlayCircle> Watch Video</button>
            </div>
            </div>
            </div> 
            </div>
            <div className="w-full space-y-5">
                <h4 className="text-[#f7a582] font-semibold text-xl">ABOUT MEDICALIFE</h4>
                <h1 className="text-4xl lg:text-6xl text-[#07332f] lg:pr-10">Our Best Services & Poplular Treatment Here.</h1>
                <p className="text-xl text-gray-500 lg:pr-20">we take pride in offering a wide range of best-in-class medical services and popular treatments to cater to your diverse healthcare needs .</p>
                <ul className="space-y-3 text-xl text-[#07332f] font-semibold">
                    <li className="flex items-center gap-3"><FaCheckCircle className="text-[#f7a582]"></FaCheckCircle> Mental health Solutions</li>
                    <li className="flex items-center gap-3"><FaCheckCircle className="text-[#f7a582]"></FaCheckCircle> Rapid Patient Improvement</li>
                    <li className="flex items-center gap-3"><FaCheckCircle className="text-[#f7a582]"></FaCheckCircle> World Class Treatment</li>
                </ul>
                <button className='flex text-[#07332f] border-[#07332f] hover:border-[#f7a582] gap-2 border-2 px-10 lg:text-xl text-lg font-semibold py-3 rounded-full items-center hover:text-[#1f3f37] hover:bg-[#f7a582] transition delay-75 duration-75 ease-in-out'>Read More <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
            </div>
                
            
        </div>
    );
};

export default About;