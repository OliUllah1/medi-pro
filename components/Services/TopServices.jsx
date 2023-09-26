import Image from "next/image";
import service2 from '../../public/services/diagnostics-img-1.png';
import service1 from '../../public/services/cardiology-img.png';
import service4 from '../../public/services/therapy-imh.png';
import service3 from '../../public/services/virology-img.png';
import { FaArrowAltCircleRight } from "react-icons/fa";


const TopServices = () => {
    const topServices =[
        {
            image:service1,
            title:'Cardiology'
        },
        {
            image:service2,
            title:'Diagnostics'
        },
        {
            image:service3,
            title:'Virology'
        },
        {
            image:service4,
            title:'Therapy'
        }
    ]
    return (
        <div className="px-3 lg:px-20 lg:py-20 py-10 space-y-10">
            <div className="lg:flex items-center gap-20">
            <div className="w-full">
            <p className="text-[#f7a582] tracking-[2px] text-xl">TOP SERVICES</p>
            <h1 className="text-4xl lg:text-5xl mt-3 mb-7 lg:leading-[55px] font-semibold text-[#07332f] tracking-[1px]">We Are a Pogressive Medical Clinic.</h1>
            </div>
            <p className="w-full text-gray-500 text-lg">Welcome to our comprehensive medical services designed to cater to your diverse healthcare needs. We are committed to delivering top-notch medical care with a patient-centered approach.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {
                    topServices.map((service,index)=><div className="border-2 border-[#07332f] py-8" key={index}>
                        <Image className="mx-auto" src={service.image} alt='service' width="70" height="70" />
                        <h3 className="font-semibold mt-3 mb-5 text-xl text-center text-[#07332f]">{service.title}</h3>
                        <div className="flex items-center justify-center">
                        <button className="text-[#f7a582] text-4xl hover:text-[#07332f]"><FaArrowAltCircleRight></FaArrowAltCircleRight></button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopServices;