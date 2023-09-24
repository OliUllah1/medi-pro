import OurServices from "../../../components/Services/OurServices";
import TopServices from "../../../components/Services/TopServices";
import TitleBanner from "../../../components/TitleBanner";


const ServicesPage = () => {
    return (
        <div>
            <TitleBanner title={'Services'}></TitleBanner>
            <OurServices></OurServices>
            <TopServices></TopServices>
        </div>
    );
};

export default ServicesPage;