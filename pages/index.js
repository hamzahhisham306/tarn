import MainBanner from '../components/DataScienceAndMLCompany/MainBanner';
import OurSolutions from '../components/DataScienceAndMLCompany/OurSolutions';
import OurServices from '../components/DataScienceAndMLCompany/OurServices';
import CaseStudySlider from '../components/DataScienceAndMLCompany/CaseStudySlider';
import Partner from '../components/DataScienceAndMLCompany/Partner';
import StartProject from '../components/DataScienceAndMLCompany/StartProject';
import AboutUsContent from '../components/AboutUsTwo/AboutUsContent';
import OurMission from '../components/AboutUsTwo/OurMission';
import Testimonials from '../components/AboutUsTwo/Testimonials';

const Index = ({ url }) => {
    const data = [
        {

        }
    ]

    return (
        <>
            <MainBanner />
            <OurSolutions />
            <CaseStudySlider url={url} />
            <AboutUsContent />
            <OurMission />
            <Testimonials />
            <Partner url={url} />

            <OurServices url={url}/>
        
        </>
    );
}

export default Index;


// export async function getStaticProps() {
//     const url = process.env.REACT_BACKEND_URL;
//     const respones = await axios.get(`${url}/get_settings`).catch((err) => {
//         console.log(err);
//     })
//     return {
//         props: {
//             data: respones?.data?.data,
//         }
//     }
// }