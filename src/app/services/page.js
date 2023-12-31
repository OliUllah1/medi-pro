import Doctors from "../../../components/Appointments/Doctors";
import AppDownload from "../../../components/Services/AppDownload";
import Culture from "../../../components/Services/Culture";
import OurServices from "../../../components/Services/OurServices";
import TopServices from "../../../components/Services/TopServices";
import TitleBanner from "../../../components/TitleBanner";


const ServicesPage = () => {
    return (
        <div>
            <TitleBanner title={'Services'}></TitleBanner>
            <OurServices></OurServices>
            <TopServices></TopServices>
            <Doctors></Doctors>
            <Culture></Culture>
            <AppDownload></AppDownload>
        </div>
    );
};

export default ServicesPage;