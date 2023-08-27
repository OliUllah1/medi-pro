import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
const Facility = () => {
    return (
        <div className="bg-slate-100 grid grid-cols-1 gap-y-5 lg:grid-cols-3 px-3 lg:px-10 py-10 lg:py-20">
            <div className="relative h-full bg-[#f7a582]">
                <h1 className="font-semibold text-3xl p-10 mb-20 text-white"> Do not<span className="font-bold">Hesitate</span> To Contact us</h1>
                <button className="absolute bottom-0 w-full flex gap-2 items-center hover:bg-[#15302d] justify-center bg-black py-5 font-semibold text-xl text-white">Make Appointment <FaCalendarAlt></FaCalendarAlt></button>
            </div>
            <div className="p-10 space-y-3 bg-[#07332f] border-r border-white">
            <Image className='' src="/doctor.ico" alt="doctor" width="50" height="50" />
            <h1 className="text-3xl font-semibold text-white">Need Family Health</h1>
            <p className="font-semibold text-gray-400 text-lg">we understand the importance of family health overall well-being.</p>
            </div>
            <div className="p-10 space-y-3 bg-[#07332f]">
            <Image className='' src="/customer-service.ico" alt="customer" width="50" height="50" />
            <h1 className="text-3xl font-semibold text-white">24 Hours Service</h1>
            <p className="font-semibold text-gray-400 text-lg">we take pride in offering 24-hour medical services to ensure that you.</p>
            </div>
        </div>
    );
};

export default Facility;