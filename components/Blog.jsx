import Image from "next/image";
import {FaLongArrowAltRight} from "react-icons/fa";
const Blog = () => {
    return (
        <div className="bg-slate-100 px-3 lg:px-10 pt-10 pb-20">
            <h4 className="text-[#f7a582] text-xl">OUR BLOG</h4>
            <h1 className="font-semibold my-3 text-5xl text-[#07332f]">Lates News <br className="hidden lg:block" /> & Articles.</h1>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="space-y-3">
                <Image className='' src="/post1.png" alt="hero-bg" width="400" height="400" />
                <div className="lg:pr-10 space-y-3">
                <h1 className="text-2xl cursor-pointer text-[#07332f]">Tips for Maintaining a Healthy Heart</h1>
                <p className="text-lg text-gray-500">Hypertension, commonly known as high blood pressure, is a prevalent</p>
                <button className="flex gap-2 items-center text-xl text-[#f7a582] font-semibold">Read More <FaLongArrowAltRight className="mt-2"></FaLongArrowAltRight> </button>
                </div>
                </div>
                <div className="space-y-3">
                <Image className='' src="/post2.png" alt="hero-bg" width="400" height="400" />
                <div className="lg:pr-10 space-y-3">
                <h1 className="text-2xl cursor-pointer text-[#07332f]">The Importance of Regular Health Checkups</h1>
                <p className="text-lg text-gray-500">Hypertension, commonly known as high blood pressure, is a prevalent</p>
                <button className="flex gap-2 items-center text-xl text-[#f7a582] font-semibold">Read More <FaLongArrowAltRight className="mt-2"></FaLongArrowAltRight> </button>
                </div>
                </div>
                <div className="space-y-3">
                <Image className='' src="/post3.png" alt="hero-bg" width="400" height="400" />
                <div className="lg:pr-10 space-y-3">
                <h1 className="text-2xl cursor-pointer text-[#07332f]">Managing Stress for Better Mental Health</h1>
                <p className="text-lg text-gray-500">Hypertension, commonly known as high blood pressure, is a prevalent</p>
                <button className="flex gap-2 items-center text-xl text-[#f7a582] font-semibold">Read More <FaLongArrowAltRight className="mt-2"></FaLongArrowAltRight> </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;