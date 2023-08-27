import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div className="bg-slate-100 lg:pb-40">
            <div className="bg-[#07332f] px-3 space-y-5 relative lg:px-10 pt-10 lg:pb-40 pb-10">
            <h4 className="text-[#f7a582] mt-10 font-semibold text-xl">T E S T I M O N I A L</h4>
            <h1 className="font-semibold text-5xl text-white">What Patients Say <br className="hidden lg:block" /> About Us.</h1>
            <div className="grid pt-10 lg:pt-0 lg:absolute lg:px-10 -bottom-24 left-0 grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="bg-white border border-[#f7a582] space-y-3 p-7">
                    <div className="flex gap-5 items-center">
                    <Image className='rounded-full' src="/testimonial1.png" alt="hero-2" width="60" height="60" />
                    <div className="space-y-1">
                        <h3 className="text-xl text-[#1f3f37] font-semibold">Oli Ullah</h3>
                        <div className="flex text-yellow-500 gap-2 items-center">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                        <p className="text-gray-500">CEO of Medi-Pro</p>
                    </div>
                    </div>
                    <p className="text-gray-500 text-lg">Highly skilled doctors and compassionate staff.	</p>
                </div>
                <div className="bg-white border border-[#f7a582] space-y-3 p-7">
                    <div className="flex gap-5 items-center">
                    <Image className='rounded-full' src="/testimonial1.png" alt="hero-2" width="60" height="60" />
                    <div className="space-y-1">
                        <h3 className="text-xl text-[#1f3f37] font-semibold">Oli Ullah</h3>
                        <div className="flex text-yellow-500 gap-2 items-center">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                        <p className="text-gray-500">CEO of Medi-Pro</p>
                    </div>
                    </div>
                    <p className="text-gray-500 text-lg">Highly skilled doctors and compassionate staff.	</p>
                </div>
                <div className="bg-white border border-[#f7a582] space-y-3 p-7">
                    <div className="flex gap-5 items-center">
                    <Image className='rounded-full' src="/testimonial1.png" alt="hero-2" width="60" height="60" />
                    <div className="space-y-1">
                        <h3 className="text-xl text-[#1f3f37] font-semibold">Oli Ullah</h3>
                        <div className="flex text-yellow-500 gap-2 items-center">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                        <p className="text-gray-500">CEO of Medi-Pro</p>
                    </div>
                    </div>
                    <p className="text-gray-500 text-lg">Highly skilled doctors and compassionate staff.	</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Testimonial;