import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/ITServices/MainBanner';
import OurSolutions from '../components/ITServices/OurSolutions';
import OurServices from '../components/ITServices/OurServices';
import OurFeatures from '../components/ITServices/OurFeatures';
import TeamMember from '../components/ITServices/TeamMember';
import RecentProjects from '../components/ITServices/RecentProjects';
import Pricing from '../components/ITServices/Pricing';
import Testimonials from '../components/ITServices/Testimonials';
import Partner from '../components/ITServices/Partner';
import OurBlog from '../components/ITServices/OurBlog';
import ProjectStartArea from '../components/ITServices/ProjectStartArea';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <OurSolutions />
            <OurServices />
            <OurFeatures />
            <TeamMember />
            <RecentProjects />
            <Pricing />
            <Testimonials />
            <Partner />
            <OurBlog />
            <ProjectStartArea />
            <Footer />
        </>
    );
}

export default Index;