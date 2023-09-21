import React from 'react';
import TitleBanner from '../../../components/TitleBanner';
import AboutUs from '../../../components/About/AboutUs';
import AboutQuality from '../../../components/About/AboutQuality';

const AboutPage = () => {
    return (
        <div>
            <TitleBanner title={'About Us'}></TitleBanner>
            <AboutUs></AboutUs>
            <AboutQuality></AboutQuality>
        </div>
    );
};

export default AboutPage;