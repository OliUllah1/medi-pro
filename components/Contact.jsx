import Image from "next/image";
import {FaArrowAltCircleRight } from "react-icons/fa";
const Contact = () => {
    return (
        <div className="relative px-3 lg:px-0 bg-slate-100">
            <Image  className='hidden lg:block' src="/home-contact-us-bg.png" alt="doctor" width="1400" height="1400" />
            <div className="bg-gradient-to-r from-black to-slate-900 opacity-60 absolute top-0 left-0 w-full hidden lg:block h-full">
            </div>
            <div className="lg:absolute top-0 w-full h-full">
                <div className="text-black pb-10 lg:pb-0 lg:text-white space-y-2 lg:py-8 text-5xl lg:mt-2  text-center">
                <h4 className="text-xl ">FILL THE FORM</h4>
                <h1 className="text-5xl">Contact Form.</h1>
                </div>
                <div className="lg:flex mt-8 lg:px-28">
                    <div className="w-full lg:w-[550px] space-y-5 p-14 bg-[#f7a582]">
                    <Image  className='' src="/contact-us-img.png" alt="doctor" width="250" height="300" />
                    <h1 className="font-semibold text-3xl text-white">Make <span className="font-bold text-4xl">Appointment</span> & Take Care Of Your Healthy Life</h1>
                    </div>
                    <div className="w-full py-12 px-3 lg:px-28 bg-[#07332f]">
                        <form className="space-y-7" action="">
                            <div className="w-full lg:flex gap-10">
                            <input placeholder="Name" className="border py-3 rounded-md px-3 mb-7 lg:mb-0 w-full text-white bg-[#07332f] border-white" type="text" />
                            <input placeholder="Email" className="border py-3 rounded-md px-3 w-full text-white bg-[#07332f] border-white" type="email" />
                            </div>
                            <div className="w-full lg:flex gap-10">
                            <input placeholder="Your Phone" className="border py-3 rounded-md px-3 mb-7 lg:mb-0 w-full text-white bg-[#07332f] border-white" type="text" />
                            <input type='date' placeholder="Date" className="border py-3 rounded-md px-3 w-full text-white bg-[#07332f] border-white" />
                            </div>
                            <textarea placeholder="Your Message" className="border h-28 py-3 rounded-md px-3 w-full text-white bg-[#07332f] border-white" name="" id=""></textarea>
                            <button className="px-10 py-3 font-bold text-lg text-white border-2 border-white rounded-full hover:border-[#f7a582] hover:bg-[#f7a582] hover:text-[#0e1d1c] flex gap-2 items-center" type="submit">Send <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;