import Image from "next/image";
import { FaAngleDoubleRight } from 'react-icons/fa';

const TitleBanner = ({title}) => {
    return (
        <div className='bg-[#07332f] relative flex justify-center items-center py-20'>
            <div>
                
                <h1 className="text-[#f7a582] font-semibold text-5xl mb-5">{title}</h1>
                <p className="flex items-center gap-5 justify-center font-semibold text-white text-xl">Home <FaAngleDoubleRight className="text-[#f7a582]" /> {title}</p>
            </div>
            <Image className='bottom-0 right-10 absolute' src="/half-circle-1.png" alt="hero-bg" width="200" height="200" />
            <Image className='bottom-0 left-10 absolute' src="/half-shape.png" alt="hero-bg" width="300" height="200" />
        </div>
    );
};

export default TitleBanner;