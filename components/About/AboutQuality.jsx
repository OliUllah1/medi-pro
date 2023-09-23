import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const AboutQuality = () => {
    return (
        <div className="bg-[#07332f] px-3 lg:px-20 py-20 lg:flex items-center gap-10 relative">
            <Image className='absolute right-0 bottom-0 lg:top-40 z-0' src="/about/half-circle-2.png" alt="hero-bg" width="250" height="400" />
            <Image className='' src="/about/who-we-are-img.png" alt="hero-bg" width="600" height="600" />
            <div className="mt-8 lg:mt-0 z-10">
                <h5 className="text-xl font-semibold text-white tracking-[3px]">WHO WE ARE</h5>
                <h1 className="lg:my-5 my-3 text-4xl lg:text-5xl tracking-[1px] text-[#f7a582] leading-[45px] lg:leading-[55px] font-medium">Improving The Quality Of Your Life Through Better Health.</h1>
                <p className="text-gray-400 font-medium">we offer a wide range of comprehensive healthcare services to address all aspects of your health. From preventive care and health screenings to specialized treatments and chronic disease management.</p>
                <button className="flex items-center gap-2 text-white font-semibold text-lg hover:text-[#f7a582] mt-8"><FaPlayCircle></FaPlayCircle> Play Video</button>
            </div>
        </div>
    );
};

export default AboutQuality;