import React, { useEffect, useState } from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/DataScienceAndMLCompany/MainBanner';
import OurSolutions from '../components/DataScienceAndMLCompany/OurSolutions';
import AboutUs from '../components/DataScienceAndMLCompany/AboutUs';
import OurServices from '../components/DataScienceAndMLCompany/OurServices';
import HowItWork from '../components/DataScienceAndMLCompany/HowItWork';
import CaseStudySlider from '../components/DataScienceAndMLCompany/CaseStudySlider';
import TeamMembers from '../components/DataScienceAndMLCompany/TeamMembers';
// import Testimonials from '../components/DataScienceAndMLCompany/Testimonials';
// import Partner from '../components/DataScienceAndMLCompany/Partner';
import BlogPost from '../components/DataScienceAndMLCompany/BlogPost';
import StartProject from '../components/DataScienceAndMLCompany/StartProject';
import Footer from '../components/_App/Footer';
import AboutUsContent from '../components/AboutUsTwo/AboutUsContent';
import OurMission from '../components/AboutUsTwo/OurMission';
import Testimonials from '../components/AboutUsTwo/Testimonials';
import axios from 'axios';

const Index = ({ url }) => {
    const [data, setData] = useState(null)
    const getData = async () => {

        await axios.get(`${url}/get_settings`).then((res) => {
            setData(res.data)

        }).catch((err) => {

        })
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            <Navbar data={data} />
            <MainBanner />
            <OurSolutions />

            <AboutUsContent />
            <OurMission />
            <Testimonials />
            {/* <AboutUs /> */}
            <OurServices />
            {/* <HowItWork /> */}
            {/* <CaseStudySlider /> */}
            {/* <TeamMembers /> */}
            {/* <Testimonials /> */}
            {/* <Partner /> */}
            <BlogPost />
            <StartProject />
            <Footer data={data} />
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