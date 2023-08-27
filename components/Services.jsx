import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Services = () => {
    return (
        <div className="bg-slate-100 relative grid grid-cols-1 gap-5 lg:grid-cols-3 lg:px-10 px-3 py-20">
            <Image className='absolute top-14 left-0 z-0' src="/shape-img.png" alt="hero-2" width="400" height="400" />
            <div className="p-10 space-y-5 z-10">
                <h3 className="text-[#f7a582] mt-10 font-semibold text-xl">MEDICAL SERVICES</h3>
                <h1 className="text-4xl font-semibold text-[#07332f]">We are Providing Best Services.</h1>
            </div>
            <div className="border-x border-t border-[#07332f] relative">
            <div className="px-10 pt-10 pb-24 space-y-3">
            <Image className='rounded-full' src="/medical-services1.png" alt="hero-2" width="70" height="70" />
            <h3 className="text-[#07332f] text-2xl font-semibold">Eye Care</h3>
            <p className="text-xl text-gray-500">we understand the importance of clear vision and its impact on your.</p>
            </div>
            <button className="absolute bottom-0 flex gap-2 items-center bg-[#f7a582] hover:text-[#07332f] w-full py-5 justify-center text-lg font-bold text-white hover:border-2 hover:border-[#07332f] hover:bg-slate-100">Read More <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
            </div>
            <div className="border-x border-t border-[#07332f] relative">
            <div className="px-10 pt-10 pb-24 space-y-3">
            <Image className='rounded-full' src="/medical-services2.png" alt="hero-2" width="70" height="70" />
            <h3 className="text-[#07332f] text-2xl font-semibold">Medical Checkup</h3>
            <p className="text-xl text-gray-500">During your medical checkup, our skilled healthcare professionals.</p>
            </div>
            <button className="absolute bottom-0 flex gap-2 items-center bg-[#f7a582] hover:text-[#07332f] w-full py-5 justify-center text-lg font-bold text-white hover:border-2 hover:border-[#07332f] hover:bg-slate-100">Read More <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
            </div>
            <div className="border-x border-t border-[#07332f] relative">
            <div className="px-10 pt-10 pb-24 space-y-3">
            <Image className='rounded-full' src="/medical-services3.png" alt="hero-2" width="70" height="70" />
            <h3 className="text-[#07332f] text-2xl font-semibold">Dental Care</h3>
            <p className="text-xl text-gray-500">we are passionate about providing top-notch dental care to help you.</p>
            </div>
            <button className="absolute bottom-0 flex gap-2 items-center bg-[#f7a582] hover:text-[#07332f] w-full py-5 justify-center text-lg font-bold text-white hover:border-2 hover:border-[#07332f] hover:bg-slate-100">Read More <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
            </div>
            <div className="border-x border-t border-[#07332f] relative">
            <div className="px-10 pt-10 pb-24 space-y-3">
            
            <h3 className="text-[#07332f] text-2xl font-semibold">Laboratory Service</h3>
            <p className="text-xl text-gray-500">we understand the critical role that accurate diagnostics play in guiding.</p>
            </div>
            <button className="absolute bottom-0 flex gap-2 items-center bg-[#f7a582] hover:text-[#07332f] w-full py-5 justify-center text-lg font-bold text-white hover:border-2 hover:border-[#07332f] hover:bg-slate-100">Read More <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
            </div>
            <div className="border-x border-t border-[#07332f] relative">
            <div className="px-10 pt-10 pb-24 space-y-3">
            <Image className='rounded-full' src="/medical-services4.png" alt="hero-2" width="70" height="70" />
            <h3 className="text-[#07332f] text-2xl font-semibold">Patient-Centered</h3>
            <p className="text-xl text-gray-500">hospitals, or clinics with positive reviews and ratings from patients.</p>
            </div>
            <button className="absolute bottom-0 flex gap-2 items-center bg-[#f7a582] hover:text-[#07332f] w-full py-5 justify-center text-lg font-bold text-white hover:border-2 hover:border-[#07332f] hover:bg-slate-100">Read More <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
            </div>
        </div>
    );
};

export default Services;