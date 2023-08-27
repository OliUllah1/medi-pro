import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const Faqs = () => {
    return (
        <div className="bg-slate-100 px-3 lg:flex gap-10 lg:px-10 pt-10 pb-20">
            <div className="relative">
            <Image className='mx-auto' src="/home-faq.png" alt="hero-2" width="650" height="600" />
            <div className="flex absolute -bottom-14 right-0">
                <div className="bg-[#1f3f37] p-3 lg:p-8 text-center  space-y-2 text-white">
                    <h1 className="font-bold text-3xl lg:text-5xl">100 +</h1>
                    <h3 className="text-xl lg:text-2xl font-semibold">Doctors</h3>
                </div>
                <div className="bg-[#f7a582] text-center p-3 lg:p-8 space-y-2 text-white">
                    <h1 className="font-bold text-3xl lg:text-5xl">16 +</h1>
                    <h3 className="text-xl lg:text-2xl font-semibold">World Office</h3>
                </div>
            </div>
            </div>
            <div className=" pt-10 lg:pt-0">
            <h4 className="text-[#f7a582] mt-10 font-semibold text-xl">F A Q s</h4>
            <h1 className="text-[#07332f] my-5 text-5xl font-semibold">Consultations with Qualified doctors.</h1>
            <ul className="text-[#07332f] mt-14 space-y-10 text-2xl">
                <li className="flex items-center gap-3"><button><FaPlus></FaPlus></button> <p>Are telemedicine consultations available?</p></li>
                <li className="flex items-center gap-3"><button><FaPlus></FaPlus></button> <p>Do you accept health insurance?</p></li>
                <li className="flex items-center gap-3"><button><FaPlus></FaPlus></button> <p>How much does a consultation cost?</p></li>
            </ul>
            </div>
            
        </div>
    );
};

export default Faqs;