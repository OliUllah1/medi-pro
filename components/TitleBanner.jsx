import Image from "next/image";
import { FaAngleDoubleRight } from 'react-icons/fa';

const TitleBanner = ({title}) => {
    return (
        <div className='bg-[#07332f] relative flex justify-center items-center py-28'>
            <div>
                <h1 className="text-[#f7a582] font-semibold text-4xl lg:text-5xl mb-3 lg:mb-5">{title}</h1>
                <p className="flex items-center gap-3 lg:gap-5 justify-center font-semibold text-white lg:text-xl">Home <FaAngleDoubleRight className="text-[#f7a582]" /> {title}</p>
            </div>
            <Image className='bottom-0 block right-0 lg:hidden absolute' src="/half-circle-1.png" alt="hero-bg" width="80" height="80" />
            <Image className='bottom-0 hidden lg:block right-10 absolute' src="/half-circle-1.png" alt="hero-bg" width="200" height="200" />
            <Image className='bottom-0 hidden lg:block left-10 absolute' src="/half-shape.png" alt="hero-bg" width="300" height="300" />
            <Image className='bottom-0 block lg:hidden left-0 absolute' src="/half-shape.png" alt="hero-bg" width="150" height="80" />
        </div>
    );
};

export default TitleBanner;