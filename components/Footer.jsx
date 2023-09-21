import Image from "next/image";
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaYoutube,FaTwitter,FaClock,FaEnvelopeOpenText,FaMapMarkerAlt,FaPhoneAlt,FaArrowAltCircleRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-[#07332f] space-y-7  px-3 lg:px-10 py-20">
            <div className='space-y-10 lg:space-y-0 lg:flex justify-between gap-10'>
            <div className="space-y-5">
            <Image className='' src="/logo.png" alt="logo" width="150" height="150" />
            <p className="text-white text-lg">Our family-centered approach to healthcare <br className="hidden lg:block" /> ensures that each member of your family <br className="hidden lg:block" />  receives personalized attention.</p>
            <div className="flex gap-5 items-center text-2xl text-[#f7a582]">
                <FaFacebookF className=" cursor-pointer hover:text-white"></FaFacebookF>
                <FaInstagram className=" cursor-pointer hover:text-white"></FaInstagram>
                <FaLinkedinIn className=" cursor-pointer hover:text-white"></FaLinkedinIn>
                <FaTwitter className=" cursor-pointer hover:text-white"></FaTwitter>
                <FaYoutube className=" cursor-pointer hover:text-white"></FaYoutube>
            </div>
            </div>
            <div className="space-y-8">
                <h4 className="text-[#f7a582] text-2xl">Quick Links</h4>
                <ul className="text-white space-y-3">
                    <li className="hover:text-[#f7a582]"><a href="">Home</a></li>
                    <li className="hover:text-[#f7a582]"><a href="">About Us</a></li>
                    <li className="hover:text-[#f7a582]"><a href="">Doctors</a></li>
                    <li className="hover:text-[#f7a582]"><a href="">Services</a></li>
                    <li className="hover:text-[#f7a582]"><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div className="space-y-8">
                <h4 className="text-[#f7a582] text-2xl">Contact Details</h4>
                <ul className="text-white space-y-5">
                    <li className=""><a href="" className="flex gap-2 items-center"><FaMapMarkerAlt className="text-[#f7a582] text-xl"></FaMapMarkerAlt> Dhaka,Bangladesh</a></li>
                    <li><a href="" className="flex gap-2 items-center"><FaEnvelopeOpenText className="text-[#f7a582] text-xl"></FaEnvelopeOpenText> healthcare@gmail.com</a></li>
                    <li><a href="" className="flex gap-2 items-center"><FaPhoneAlt className="text-[#f7a582] text-xl"></FaPhoneAlt> 134564874656</a></li>
                    <li><a href="" className="flex gap-2 items-center"><FaClock className="text-[#f7a582] text-xl"></FaClock> 8 AM - 5 PM , Monday - Saturday</a></li>
                    
                </ul>
            </div>
            <div className="space-y-8">
                <h4 className="text-[#f7a582] text-2xl">Newsletter</h4>
                <div className="text-white space-y-4">
                <h4 className="font-semibold text-xl">Subscribe To Our Newsletter</h4>
                <p className="text-lg">Stay informed and never miss out on the <br className="hidden lg:block" /> latest news, health tips.</p>
                <form className="relative" action="">
                    <input className="border border-white w-full py-[19px] bg-[#07332f] rounded-md px-5 text-white" placeholder="Enter Your Email" type="text" />
                    <button className="absolute top-1 border-2 border-[#f7a582] right-1 py-3 bg-[#f7a582] px-5 rounded-md flex gap-2 items-center font-bold text-lg hover:bg-[#07332f] hover:text-[#f7a582]" type="submit">Send <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
                </form>
                </div>
            </div>
        </div>
        <p className="text-center font-medium text-lg text-white">Copyright 2023 &#169; <span className="text-[#f7a582] font-bold cursor-pointer">MediPro</span> All Right Reserved.</p>
        </div>
    );
};

export default Footer;