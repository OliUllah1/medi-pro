import {FaClock,FaEnvelopeOpenText,FaMapMarkerAlt,FaPhoneAlt,FaCalendarAlt} from 'react-icons/fa';

const AppointmentForm = () => {
    return (
        <div className="lg:px-10 px-2 py-20">
            <div className='flex'>
                <form className='w-full bg-[#07332f] p-20 space-y-8' action="">
                <div className='flex gap-10'>
                <select className="w-full bg-[#07332f] px-3 py-4 rounded-md text-white border border-white font-bold">
                    <option disabled selected>Select Clinic</option>
                </select>
                <select className="w-full bg-[#07332f] px-3 py-4 rounded-md text-white border border-white font-bold">
                    <option disabled selected>Select Location</option>
                </select>
                </div>
                <div className='flex gap-10'>
                    <input placeholder='Enter Your Name' className="w-full bg-[#07332f] px-3 py-4 rounded-md text-white border border-white font-bold" type="text" />
                    <input placeholder='Enter Your Email' className="w-full bg-[#07332f] px-3 py-4 rounded-md text-white border border-white font-bold" type="email" />
                </div>
                <div className='flex gap-10'>
                    <input placeholder='Enter Your Phone No.' className="w-full bg-[#07332f] px-3 py-4 rounded-md text-white border border-white font-bold" type="text" />
                    <input placeholder='Select Date' className="w-full bg-[#07332f] px-3 py-4 rounded-md text-white border border-white font-bold" type="date" />
                </div>
                <div className='flex gap-10'>
                    <input placeholder='Select Time' className="w-full bg-[#07332f] px-3 py-4 rounded-md text-white border border-white font-bold" type="time" />
                    <button className='flex w-full border-2 py-4 rounded-full text-[#f7a582] text-lg border-[#f7a582] gap-2 font-semibold items-center hover:text-[#1f3f37] hover:bg-[#f7a582] transition delay-75 duration-75 ease-in-out justify-center'>Make Appointment <FaCalendarAlt></FaCalendarAlt> </button>
                </div>
                </form>
                <div className='bg-[#f7a582] px-10 py-20 space-y-5 text-white'>
                    <h1 className='font-semibold text-4xl'>Quick Contacts</h1>
                    <p className='text-lg'>Have any questions or need to schedule an appointment? Reach out to us quickly!</p>
                    <ul className="space-y-5 text-lg">
                    <li className=""><a href="" className="flex gap-3 items-center"><FaMapMarkerAlt className="text-[#07332f] text-xl"></FaMapMarkerAlt> Dhaka,Bangladesh</a></li>
                    <li><a href="" className="flex gap-3 items-center"><FaEnvelopeOpenText className="text-[#07332f] text-xl"></FaEnvelopeOpenText> healthcare@gmail.com</a></li>
                    <li><a href="" className="flex gap-3 items-center"><FaPhoneAlt className="text-[#07332f] text-xl"></FaPhoneAlt> 134564874656</a></li>
                    <li><a href="" className="flex gap-3 items-center"><FaClock className="text-[#07332f] text-xl"></FaClock> 8 AM - 5 PM , Monday - Saturday</a></li>
                    
                </ul>
                </div>
            </div>
        </div>
    );
};

export default AppointmentForm;