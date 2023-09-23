import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const AboutServices = () => {
    return (
        <div className="px-3 lg:px-10 py-20">
            <h5 className="text-xl text-[#f7a582] tracking-[3px]">TOP SERVICES</h5>
            <h1 className='text-[#07332f] text-5xl leading-[55px] font-medium mt-3 mb-8'>We Are a Pogressive <br className="hidden lg:block" /> Medical Clinic.</h1>

            <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
                <div className="shadow px-5 py-8 rounded-sm">
                <Image className='' src="/about/top-services1.png" alt="hero-bg" width="60" height="60" />
                <h3 className="my-2 text-[#07332f] text-2xl">Modern Laboratory</h3>
                <p className="text-gray-500">Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise.</p>
                <button className="flex text-[#07332f] items-center gap-2 font-semibold text-lg hover:text-[#f7a582] mt-5">Read More <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>

                </div>
                <div className="shadow px-5 py-8 text-white bg-[#f7a582] rounded-sm">
                <Image className='' src="/about/top-services2.png" alt="hero-bg" width="60" height="60" />
                <h3 className="my-2 text-2xl">Diagnostics Center</h3>
                <p className="">We are committed to providing exceptional laboratory services, supporting healthcare providers .</p>
                <button className="flex items-center gap-2 font-semibold text-lg hover:text-[#07332f] mt-5">Read More <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>

                </div>
                <div className="shadow px-5 py-8 rounded-sm">
                <Image className='' src="/about/top-services3.png" alt="hero-bg" width="60" height="60" />
                <h3 className="my-2 text-[#07332f] text-2xl">Experienced Doctors</h3>
                <p className="text-gray-500">we take pride in our team of experienced doctors who are at the forefront of delivering exceptional.</p>
                <button className="flex text-[#07332f] items-center gap-2 font-semibold text-lg hover:text-[#f7a582] mt-5">Read More <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </button>

                </div>
            </div>
        </div>
    );
};

export default AboutServices;