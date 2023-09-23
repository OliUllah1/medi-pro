import React from 'react';
import TitleBanner from '../../../components/TitleBanner';
import AboutUs from '../../../components/About/AboutUs';
import AboutQuality from '../../../components/About/AboutQuality';
import AboutServices from '../../../components/About/AboutServices';
import FamilyServices from '../../../components/About/FamilyServices';


const AboutPage = () => {
    return (
        <div>
            <TitleBanner title={'About Us'}></TitleBanner>
            <AboutUs></AboutUs>
            <AboutQuality></AboutQuality>
            <AboutServices></AboutServices>
            <FamilyServices></FamilyServices>
        </div>
    );
};

export default AboutPage;