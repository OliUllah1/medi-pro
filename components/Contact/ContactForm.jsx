import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ContactForm = () => {
    return (
        <div className="px-3 lg:px-20 py-20">
            <p className="text-[#f7a582] tracking-[2px] text-lg">FILL THE FORM</p>
            <h1 className="text-4xl lg:text-5xl mt-3 mb-7 font-semibold text-[#07332f] tracking-[1px]">Contact Form</h1>
             <div className="">
                <form className="px-40 py-20 bg-[#07332f] space-y-12">
                    <div className="flex items-center gap-10">
                    <input type="text" className="bg-[#07332f] w-full pb-4 border-b border-gray-400 text-gray-500" placeholder="Enter Your Full Name" />
                    <input type="text" className="bg-[#07332f] w-full  pb-4 border-b border-gray-400 text-gray-500" placeholder="Enter Your Full Email" />
                    </div>
                    <div className="flex items-center gap-10">
                    <input type="text" className="bg-[#07332f] w-full pb-4 border-b border-gray-400 text-gray-500" placeholder="Enter Your Phone Number" />
                    <input type="text" className="bg-[#07332f] w-full  pb-4 border-b border-gray-400 text-gray-500" placeholder="Your Subject" />
                    </div>
                    <textarea name="" id="" placeholder="Type Your Message" className="w-full bg-[#07332f] border-b" rows="5"></textarea>
                    <div className="flex items-center justify-center">
                    <button className="border-2 border-white rounded-full px-8 py-4 text-white font-semibold text-lg flex items-center gap-2 hover:bg-[#f7a582] hover:border-[#f7a582] hover:text-[#07332f]">Book Now <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>
                    </div>
                </form>
             </div>
        </div>
    );
};

export default ContactForm;