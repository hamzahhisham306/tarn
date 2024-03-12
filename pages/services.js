import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesOne from '../components/Services/ServicesOne';
import StartProject from '../components/Common/StartProject';
import Footer from '../components/_App/Footer';

const Services = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Services" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services" 
            />

            <ServicesOne />
            
            <StartProject />
            
            <Footer />
        </>
    );
}

export default Services;