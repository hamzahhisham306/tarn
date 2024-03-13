import MainBanner from '../components/DataScienceAndMLCompany/MainBanner';
import OurSolutions from '../components/DataScienceAndMLCompany/OurSolutions';
import OurServices from '../components/DataScienceAndMLCompany/OurServices';
import CaseStudySlider from '../components/DataScienceAndMLCompany/CaseStudySlider';
import Partner from '../components/DataScienceAndMLCompany/Partner';
import AboutUsContent from '../components/AboutUsTwo/AboutUsContent';
import OurMission from '../components/AboutUsTwo/OurMission';
import Testimonials from '../components/AboutUsTwo/Testimonials';

const Index = ({ url }) => {
 

    return (
        <>
            <MainBanner />
            <OurSolutions />
            <CaseStudySlider url={url} />
            <AboutUsContent />
            <OurMission />
            <Testimonials url={url}/>
            <Partner url={url} />

            <OurServices url={url}/>
        
        </>
    );
}

export default Index;


