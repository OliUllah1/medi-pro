import Image from "next/image";
import { FaFacebookF,FaLinkedinIn,FaTwitter,FaInstagram } from "react-icons/fa";

const Doctors = () => {
    return (
        <div className="px-2 lg:px-10 py-20">
            <h5 className="text-[#f7a582] font-semibold">OUR BEST DOCTORS</h5>
            <h1 className="text-[#07332f] text-5xl font-semibold mb-10">Meet Our <br className="hidden lg:block" /> Doctors.</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="">
                <Image className='' src="/doctors-team1.png" alt="hero-bg" width="400" height="300" />
                <p className="text-[#f7a582] my-2">Family Physician</p>
                <h3 className="text-[#07332f] text-2xl font-semibold">Dr. Elizabeth Foster</h3>
                <p className="text-gray-500 font-semibold text-lg ">Compassionate care for all ages.</p>
                <div className="flex mt-5 items-center gap-5 text-xl text-[#f7a582]">
                    <FaFacebookF></FaFacebookF>
                    <FaInstagram></FaInstagram>
                    <FaLinkedinIn></FaLinkedinIn>
                    <FaTwitter></FaTwitter>
                </div>
                </div>
                <div className="">
                <Image className='' src="/doctors-team2.png" alt="hero-bg" width="400" height="300" />
                <p className="text-[#f7a582] my-2">Surgeon</p>
                <h3 className="text-[#07332f] text-2xl font-semibold">Dr. David Lee</h3>
                <p className="text-gray-500 font-semibold text-lg ">Skillful hands, transforming lives.</p>
                <div className="flex mt-5 items-center gap-5 text-xl text-[#f7a582]">
                    <FaFacebookF></FaFacebookF>
                    <FaInstagram></FaInstagram>
                    <FaLinkedinIn></FaLinkedinIn>
                    <FaTwitter></FaTwitter>
                </div>
                </div>
                <div className="">
                <Image className='' src="/doctors-team3.png" alt="hero-bg" width="400" height="300" />
                <p className="text-[#f7a582] my-2">Psychiatrist</p>
                <h3 className="text-[#07332f] text-2xl font-semibold">Dr. Jennifer White</h3>
                <p className="text-gray-500 font-semibold text-lg ">Mental wellness advocate and guiding.</p>
                <div className="flex mt-5 items-center gap-5 text-xl text-[#f7a582]">
                    <FaFacebookF></FaFacebookF>
                    <FaInstagram></FaInstagram>
                    <FaLinkedinIn></FaLinkedinIn>
                    <FaTwitter></FaTwitter>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;