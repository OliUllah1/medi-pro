import { FaCheckCircle,FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";


const FamilyServices = () => {
    return (
        <div className="px-3 py-20 lg:px-20 bg-[#fff7f4]">
            <p className="text-[#f7a582] tracking-[2px] text-lg">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
            <h1 className="text-5xl mt-2 mb-10 text-[#07332f] tracking-[1px]">We Provide All Aspects Of Medical Practice For Your Whole Family!</h1>

            <div className="lg:flex items-center pt-7 gap-20">
                <div className="mb-10 lg:mb-0 w-full">
                    <h4 className="text-gray-900 font-semibold text-lg">Welcome to medipro, where we offer comprehensive <br className="hidden lg:block" /> medical care tailored to every member of your family.</h4>
                    <p className="text-gray-500 my-10">Our dedicated team of healthcare professionals is committed to <br className="hidden lg:block" /> providing you and your loved ones with personalized and <br className="hidden lg:block" /> compassionate healthcare services. We understand the <br className="hidden lg:block" />importance of family health.</p>
                    <div className="space-y-3 mb-8">
                        <span className="flex items-center gap-3 "><FaCheckCircle className="text-[#f7a582] text-xl"></FaCheckCircle> <p className="text-[#07332f] font-semibold text-lg">Family-Centered Care</p></span>
                        <span className="flex items-center gap-3 "><FaCheckCircle className="text-[#f7a582] text-xl"></FaCheckCircle> <p className="text-[#07332f] font-semibold text-lg">Preventive Services</p></span>
                        <span className="flex items-center gap-3 "><FaCheckCircle className="text-[#f7a582] text-xl"></FaCheckCircle> <p className="text-[#07332f] font-semibold text-lg">Vaccinations and Immunizations</p></span>
                    </div>
                    <button className="border-2 border-[#07332f] rounded-full px-8 py-3 text-[#07332f] font-semibold text-lg flex items-center gap-2 hover:bg-[#f7a582] hover:border-[#f7a582]">Get Started <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>
                </div>
                <div className="w-full space-y-7"> 
                <div className="flex items-start gap-2 px-3 lg:px-10 py-8 bg-white shadow-sm rounded-sm">
                <Image className='' src="/about/application-img.png" alt="hero-bg" width="70" height="70" />
                <div className="space-y-2">
                    <h5 className="text-[#07332f] font-semibold text-xl">Patient Information</h5>
                    <p className="text-[19px] text-gray-500">I hereby give consent to and its healthcare professionals to provide medical treatment.</p>
                </div>
                </div>
                <div className="flex items-start gap-2 px-3 lg:px-10 py-8 bg-white shadow-sm rounded-sm">
                <Image className='' src="/about/application-img.png" alt="hero-bg" width="70" height="70" />
                <div className="space-y-2">
                    <h5 className="text-[#07332f] font-semibold text-xl">Emergency Contact</h5>
                    <p className="text-[19px] text-gray-500">This application form is for informational purposes only and does not guarantee.</p>
                </div>
                </div>
                <div className="flex items-start gap-2 px-3 lg:px-10 py-8 bg-white shadow-sm rounded-sm">
                <Image className='' src="/about/application-img.png" alt="hero-bg" width="70" height="70" />
                <div className="space-y-2">
                    <h5 className="text-[#07332f] font-semibold text-xl">Medical History</h5>
                    <p className="text-[19px] text-gray-500">our medical history is a vital piece of information that provides healthcare.</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default FamilyServices;