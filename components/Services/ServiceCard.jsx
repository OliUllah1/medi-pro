import Image from "next/image";
import { FaCheckCircle,FaRegArrowAltCircleRight } from "react-icons/fa";
const ServiceCard = ({serviceInfo}) => {
    const {image,title,subtitle,service}=serviceInfo;
    return (
        <div className="bg-[#07332f] px-5 py-8 rounded-sm">
            <Image
            src={image}
            alt={title}
            width="65"
            height="65"
          />
            <h1 className="text-white my-3 font-semibold text-xl">{title}</h1>
            <p className="text-gray-400 font-semibold pr-9">{subtitle}</p>
            <div className="my-8 space-y-2">
                
                {
                    service.map((item,index)=><span key={index} className="flex items-center gap-3"><FaCheckCircle className="text-[#f7a582] text-xl"></FaCheckCircle> <p className="text-white font-semibold text-lg">{item}</p></span>)
                }
            </div>
            <button className="border-2 border-white rounded-full px-8 py-4 text-white font-semibold text-lg flex items-center gap-2 hover:bg-[#f7a582] hover:border-[#f7a582] hover:text-[#07332f]">Read More<FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>
        </div>
    );
};

export default ServiceCard;