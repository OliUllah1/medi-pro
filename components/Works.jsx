import Image from "next/image";

const Works = () => {
    return (
        <div className="bg-slate-100 px-3 lg:px-10 py-10">
            <div className="py-10 lg:flex space-y-5 gap-10 items-center">
                <div className="w-full space-y-3">
                    <h4 className="text-[#f7a582] mt-10 font-semibold text-xl">HOW WE WORK</h4>
                    <h1 className="text-[#07332f] text-5xl ">A Comprehensive Directory For Your Health Care.</h1>
                </div>
                <p className="lg:pl-20 text-xl text-gray-500">we are your trusted one-stop destination for all your healthcare needs. Our comprehensive directory is designed to provide you with easy access to a wide range of healthcare services and providers, ensuring that you and your family.</p>
            </div>
            <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="space-y-3">
                <Image className='mx-auto' src="/how-we-work1.png" alt="hero-2" width="100" height="100" />
                <h3 className="text-center font-semibold text-[#1f3f37] text-xl">Book an Appointment</h3>
                </div>
                <div className="space-y-3">
                <Image className='mx-auto' src="/how-we-work4.png" alt="hero-2" width="100" height="100" />
                <h3 className="text-center font-semibold text-[#1f3f37] text-xl">Conduct Checkup</h3>
                </div>
                <div className="space-y-3">
                <Image className='mx-auto' src="/how-we-work3.png" alt="hero-2" width="100" height="100" />
                <h3 className="text-center font-semibold text-[#1f3f37] text-xl">Perform Treatment</h3>
                </div>
                <div className="space-y-3">
                <Image className='mx-auto' src="/how-we-work2.png" alt="hero-2" width="100" height="100" />
                <h3 className="text-center font-semibold text-[#1f3f37] text-xl">Prescribe & Payment</h3>
                </div>
            </div>
        </div>
    );
};

export default Works;