import { FaCalendarAlt,FaBars } from "react-icons/fa";
import Image from "next/image";
const Appointments = () => {
    return (
        <div className="bg-[#07332f] px-3 lg:px-10 lg:flex items-center justify-between py-14">
            <div className="lg:flex space-y-5 lg:space-y-0 items-center gap-10">
            <Image className='' src="/appointments.png" alt="hero-2" width="70" height="70" />
            <div className="space-y-5 text-white">
                <h1 className="text-3xl lg:text-5xl">Open for Appointments</h1>
                <p className="">we are delighted to announce that our doors are open, and we are now <br className="hidden lg:block" /> accepting appointments to serve you better.</p>
            </div>
            </div>
            <button className='flex mt-10 lg:mt-0 border-2 px-10 py-4 rounded-full text-[#f7a582] text-lg border-[#f7a582] gap-2 font-semibold items-center hover:text-[#1f3f37] hover:bg-[#f7a582] transition delay-75 duration-75 ease-in-out'>Make Appointment <FaCalendarAlt></FaCalendarAlt> </button>
        </div>
    );
};

export default Appointments;