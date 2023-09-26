import Image from "next/image";
import mobileImg from '../../public/services/dwonload-img.png'
import playStore from '../../public/services/google-play-img.png'
import appStore from '../../public/services/app-store-img.png'

const AppDownload = () => {
    return (
        <div className="px-3 lg:px-20 lg:py-20 py-10 lg:flex items-center gap-20">
            <div className="w-full">
            <h5 className="text-[#f7a582] mb-3 text-lg tracking-[2px]">APP DOWNLOAD</h5>
            <h1 className="text-[#07332f] text-5xl mb-10 tracking-[1px]">Download Nursehome App & Get 100$ Healthcase.</h1>
            <p className="my-5 text-gray-500">Welcome to the convenient world of our Medical Website App, where taking control of your health has never been easier. Download our user-friendly app now to access a wide range of medical services and resources right at your fingertips.</p>
            <div className="flex items-center gap-7 lg:gap-10">
            <Image className='' layout="responsive" src={playStore} alt="hero-bg" width="220" height="220" />
            <Image className='' layout="responsive" src={appStore} alt="hero-bg" width="220" height="220" />
            </div>
            </div>
            <div className="w-full mt-10 lg:mt-0">
            <Image src={mobileImg} alt="hero-bg" width="450" height="300" />
            </div>
        </div>
    );
};

export default AppDownload;