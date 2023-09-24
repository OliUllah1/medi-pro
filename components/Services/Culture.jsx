import Image from 'next/image'
import img1 from '../../public/services/our-cultuer-gallery1.jpg'
import img2 from '../../public/services/our-cultuer-gallery2.jpg'
import img3 from '../../public/services/our-cultuer-gallery3.jpg'
import img4 from '../../public/services/our-cultuer-gallery4.jpg'
import img5 from '../../public/services/our-cultuer-gallery5.jpg'
import img6 from '../../public/services/our-cultuer-gallery6.jpg'
import img7 from '../../public/services/our-cultuer-gallery7.jpg'
import img8 from '../../public/services/our-cultuer-gallery8.jpg'
import img9 from '../../public/services/our-cultuer-gallery9.jpg'
import img10 from '../../public/services/our-cultuer-gallery10.jpg'

const Culture = () => {
    return (
        <div className="py-20 space-y-10">
            <div className="lg:flex items-center gap-20 px-3 lg:px-20">
            <div className="w-full">
            <p className="text-[#f7a582] tracking-[2px] text-xl">OUR CULTURE</p>
            <h1 className="text-4xl lg:text-5xl mt-3 mb-7 lg:leading-[55px] text-[#07332f] tracking-[1px]">Our Infrastructure & Culture</h1>
            </div>
            <p className="w-full text-gray-500">At our medipro , we pride ourselves on fostering a culture of care, where every individual’s well-being is our utmost priority. Our commitment to excellence in healthcare is grounded.</p>
            </div>
            <div className='grid lg:grid-cols-5 grid-cols-2'>
                <Image className='' src={img1} alt="hero-bg" width="400" height="300" />
                <Image className='' src={img2} alt="hero-bg" width="400" height="300" />
                <Image className='' src={img3} alt="hero-bg" width="400" height="300" />
                <Image className='' src={img4} alt="hero-bg" width="400" height="300" />
                <Image className='' src={img5} alt="hero-bg" width="400" height="300" />
                <Image className='' src={img6} alt="hero-bg" width="400" height="300" />
                <Image className='' src={img7} alt="hero-bg" width="400" height="300" />
                <Image className='' src={img8} alt="hero-bg" width="400" height="300" />
                <Image className='' src={img9} alt="hero-bg" width="400" height="300" />
                <Image className='' src={img10} alt="hero-bg" width="400" height="300" />
            </div>
        </div>
    );
};

export default Culture;