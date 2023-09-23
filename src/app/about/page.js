import React from 'react';
import TitleBanner from '../../../components/TitleBanner';
import AboutUs from '../../../components/About/AboutUs';
import AboutQuality from '../../../components/About/AboutQuality';
import AboutServices from '../../../components/About/AboutServices';
import FamilyServices from '../../../components/About/FamilyServices';
import Appointments from '../../../components/Appointments';
import Doctors from '../../../components/Appointments/Doctors';
import Testimonial from '../../../components/Testimonial';
import Blog from '../../../components/Blog';


const AboutPage = () => {
    return (
        <div>
            <TitleBanner title={'About Us'}></TitleBanner>
            <AboutUs></AboutUs>
            <AboutQuality></AboutQuality>
            <AboutServices></AboutServices>
            <FamilyServices></FamilyServices>
            <Appointments></Appointments>
            <Doctors></Doctors>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
};

export default AboutPage;